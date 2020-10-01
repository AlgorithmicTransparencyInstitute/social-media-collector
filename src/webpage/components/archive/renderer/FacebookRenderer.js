import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

import Reason from './Reason';
import Boosted from './Boosted';

import './FacebookRenderer.less';

const itemShape = {
  id: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  itemType: PropTypes.string.isRequired,
  payload: PropTypes.shape({
    contentHtml: PropTypes.string.isRequired
  }).isRequired
};

const AdTargeting = ({ item }) => {
  if (!item.payload.adTargetingData) return null;

  const {
    data: { waist_targeting_data: targetingData, waist_is_marketplace_boosted_listing: boosted }
  } = item.payload.adTargetingData;
  const targetingReasons = targetingData.map(({ __typename }) => __typename);

  return (
    <div className="targeting">
      <h4>Ad Targeting</h4>
      <Boosted boosted={boosted} />
      {targetingReasons.map(reason => (
        <Reason key={reason} reason={reason} />
      ))}
    </div>
  );
};
AdTargeting.displayName = 'Ad targeting';

AdTargeting.propTypes = {
  item: PropTypes.shape(itemShape).isRequired
};

// Recurse all parent elements and try to find 'a' tag.
function hasATagParent(el /* DOM Element */) {
  while (el.parentNode) {
    el = el.parentNode;
    if (el.tagName && el.tagName.toLowerCase() === 'a') return el;
  }
  return null;
}

// Find the ad image used. The tricky part here is there could be two different
// kinds of ways to parse (I think based on pre and post2020).
function getAdImg(doc /* DOMParser */) {
  // Pre 2020. Much easier to parse.
  var imgs = doc.querySelectorAll('div.fbStoryAttachmentImage');
  if (imgs.length > 0) {
    return imgs[0];
  }

  // Post 2020
  imgs = doc.querySelectorAll('img');
  for (var i = 0; i < imgs.length; ++i) {
    var img = imgs[i];

    // These are the conditions where we know an image is not an ad image.
    // 1) `src` contains `data:image/svg+xml` -- an example is a heart icon
    // 2) Contains `/emoji.php/` -- these are emojis within the ad copy.
    // 3) Contains `/images/video/play` -- Video play icon.
    // 4) Width, height is less than 75px -- could be profile pic.
    // 5) Has `aria-label` -- this is usually advertiser name like `ManyChat`
    // 6) `src` contains '/rsrc.php/' -- Seems to be FB pixel.
    var src = img.getAttribute('src');
    var h = parseInt(img.getAttribute('height'), 10) || 76;
    var w = parseInt(img.getAttribute('width'), 10) || 76;
    var arialabel = img.getAttribute('aria-label');
    if (
      src.indexOf('data:image/svg+xml') >= 0 ||
      src.indexOf('/emoji.php/') >= 0 ||
      src.indexOf('/images/video/play') >= 0 ||
      w < 75 ||
      h < 75 ||
      arialabel != null ||
      src.indexOf('/rsrc.php/') >= 0
    ) {
      continue;
    }
    return img;
  }
}

function newDoc(html /* string */) {
  // From https://stackoverflow.com/a/30040354/3325787
  var parser = new DOMParser();
  var doc = parser.parseFromString(html, 'text/html');
  return doc;
}

function getAdCopyPre2020(doc /* DOMParser */) {
  var html = '';
  var els = doc.querySelectorAll('div.userContent');
  if (els.length > 0) {
    for (var i = 0; i < els.length; ++i) {
      html += els[i].innerHTML;
    }
  }
  return html;
}

function getAdCopyPost2020(doc /* DOMParser */) {
  var html = '';
  var els = doc.querySelectorAll('div[dir="auto"], span[dir="auto"]');
  for (var i = 0; i < els.length; ++i) {
    var el = els[i];
    if (el.childElementCount > 1) {
      continue;
    }

    // The ad copy that appears after the image has A tag as parent. Ignore
    // these. That stuff gets looked at in getAdCTAPost2020.
    if (hasATagParent(el)) {
      continue;
    }

    // This 'el' could still be valid it has a child element for the reason of
    // an emoji.
    if (el.childElementCount === 1 && el.innerHTML.indexOf('/emoji.php') >= 0) {
      html += el.innerHTML;
    } else if (el.childElementCount === 0) {
      html += el.innerText + '<br />';
    }
  }
  return html;
}

function getAdCTAPost2020(doc /* DOMParser */) {
  var html = '<br>';
  var els = doc.querySelectorAll('div[dir="auto"], span[dir="auto"]');
  for (var i = 0; i < els.length; ++i) {
    var el = els[i];
    if (el.childElementCount > 1) {
      continue;
    }

    // The ad copy that appears after the image must have an A tag.
    if (!hasATagParent(el)) {
      continue;
    }

    // This 'el' could still be valid it has a child element for the reason of
    // an emoji.
    if (el.childElementCount === 1 && el.innerHTML.indexOf('/emoji.php') >= 0) {
      html += el.innerHTML;
    } else if (el.childElementCount === 0) {
      html += el.innerText + '<br />';
    }
  }
  return html;
}

function getAdCopy(doc /* DOMParser */) {
  var html = getAdCopyPre2020(doc);
  if (html.length > 0) {
    return html;
  }
  return getAdCopyPost2020(doc);
}

function getAdvertiser(doc /* DOMParser */) {
  // pre2020
  var els = doc.querySelectorAll('a[data-hovercard]');
  if (els.length > 1) {
    return els[1].outerHTML;
  }

  // post2020
  els = doc.querySelectorAll('h4[dir="auto"]');
  if (els.length === 0) {
    return '';
  }
  return els[0].innerHTML;
}

function getCTALink(doc /* DOMParser */) {
  // Attempt 1.
  var els = doc.querySelectorAll('a[aria-label]');
  for (var i = 0; i < els.length; ++i) {
    if (els[i].href.indexOf('/l.php') >= 0 && els[i].innerText.length > 0) {
      return '<br>' + els[i].outerHTML;
    }
  }

  // Attempt 2.
  els = doc.querySelectorAll('a[rel="noopener nofollow"]');
  for (i = 0; i < els.length; ++i) {
    if (
      els[i].href.indexOf('/l.php') >= 0 &&
      els[i].innerText.length > 0 &&
      els[i].childElementCount === 0
    ) {
      return '<br>' + els[i].outerHTML;
    }
  }
}

function makeAdImg(img /* DOMElem */) {
  return '<img src="' + img.getAttribute('src') + '" width=500>';
}

function makeAdHtml(html /* string */) {
  var doc = newDoc(html);
  var img = getAdImg(doc);
  if (!img) {
    return html;
  }
  return (
    getAdvertiser(doc) + getAdCopy(doc) + makeAdImg(img) + getAdCTAPost2020(doc) + getCTALink(doc)
  );
}

const FacebookRenderer = ({ item }) => {
  const {
    id,
    itemId: _itemId,
    itemType,
    payload: { contentHtml: html }
  } = item;

  const classes = `ati-item fb-item fb-${itemType}`;

  var adhtml = DOMPurify.sanitize(makeAdHtml(html));

  return (
    <div className="archive-item">
      <div id={id} className={classes} dangerouslySetInnerHTML={{ __html: adhtml }} />
      <AdTargeting item={item} />
    </div>
  );
};

FacebookRenderer.propTypes = {
  item: PropTypes.shape(itemShape).isRequired
};

export default FacebookRenderer;
