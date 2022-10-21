const LINK = ':scope a[role="link"],:scope div[role="button"],:scope [aria-label="Sponsored"]';

/**
 *  Determine if a FB feed post is sponsored.
 *  Single <a> element sponsored string:
 *  <a ...>Sponsored</a>
 *
 *  @param {HTMLElement} element - A facebook post element.
 *  @param {String} sponsorStr - Sponsored string to scan for. (Defaults to 'Sponsored').
 *  @returns {Boolean} true if the post subtitle contains a visible sponsored substring.
 */

// Because FB breaks this file's ad detection often, I'm writing down the process
// for fixing it so that I don't have to figure it out every time I try.
//
// Steps to fix isSponsoredPost.
//
// 1) In Chrome dev console, find the ad post element. You can find it by
//    right-clicking on ad post and Inspect Element, then "Store as global variable".
//    That creates a temp1 variable. Do `var ad = temp1`
//
// 2) Test each sponsor test on adpost variable in dev console. Example:
//
//      isSponsoredTest1(ad)
//
// 3) Now you can run your traditional debugging methods by stepping thru each
//    line of code in each sponsored test.

// Since Facebook, by FTC law, must have an aria label with the word "Sponsored",
// our strategy is to find all elements with a aria-labelledby attr, then lookup
// the corresponding aria label for the word Sponsored.
//
// This is also not computationally expensive, since on the test post element
// I used, I found only 3 aria-labelledby elements that we need to go through.
const isSponsoredPost = function(el, sponsorStr = 'Sponsored') {
  var result = isSponsoredTest1(el, sponsorStr) || isSponsoredTest2(el, sponsorStr);
  result = result || isSponsoredTest3(el, sponsorStr);
  result = result || isSponsoredTest4(el, sponsorStr);
  result = result || isSponsoredTest5(el, sponsorStr);
  // Because FB breaks the isSponsoredPost code often, I'm leaving this
  // console.log in to help future debugging.
  // console.debug('>> isSponsoredPost', el, result);
  return result;
};

// First we try to detect sponsored post by searching for aria labels with
// Sponsored label.
function isSponsoredTest1(element, sponsorStr = 'Sponsored') {
  const labelledElems = element.querySelectorAll('[aria-labelledby]');
  for (const labelledElem of labelledElems) {
    // Facebook creates ghost divs with a fake Sponsored aria label. We can
    // counter this by checking the span/div has a valid width.
    if (labelledElem.clientWidth === 0) {
      continue;
    }

    const label = labelledElem.getAttribute('aria-labelledby');
    const ariaLabelElem = document.querySelector('#' + label);
    if (ariaLabelElem && ariaLabelElem.textContent === sponsorStr) {
      return true;
    }
  }

  return false;
}

// Then we try the usual way of finding Sponsor text in the FB Post itself.
function isSponsoredTest2(element, sponsorStr = 'Sponsored') {
  return Boolean(
    Array.from(element.querySelectorAll(LINK)).find(link => {
      return (
        link.innerText === sponsorStr || // ordinary ads
        link.innerText.indexOf(sponsorStr) === 0 || // political ads that say, e.g. Sponsored • Paid for by Whoever
        link.getAttribute('aria-label') === sponsorStr // obfuscated ads that say, e.g. tiSSpponeonssetormoreidealagd but have a nearby div with aria-label="Sponsored"
      );
    })
  );
}

// Whether el2 contains el1.
function contains(el1, el2) {
  var rect1 = el1.getBoundingClientRect();
  var rect2 = el2.getBoundingClientRect();

  return (
    rect2.top <= rect1.top &&
    rect1.top <= rect2.bottom &&
    rect2.top <= rect1.bottom &&
    rect1.bottom <= rect2.bottom &&
    rect2.left <= rect1.left &&
    rect1.left <= rect2.right &&
    rect2.left <= rect1.right &&
    rect1.right <= rect2.right
  );
}

// Then we try the usual way of finding Sponsor text in the FB Post itself.
function isSponsoredTest3(element, sponsorStr = 'Sponsored') {
  var els = element.querySelectorAll(LINK);
  for (const el of els) {
    // Try to bypass obfuscated elements by only taking the spans that are
    // within the original element.
    var fullstring = '';
    var spans = el.querySelectorAll('span');
    for (const span of spans) {
      if (span.firstChild && contains(span, el)) {
        var add = span.firstChild.nodeValue;
        if (add === null) {
          continue;
        }
        fullstring += add;
      }
    }
    if (fullstring === sponsorStr) {
      return true;
    }
  }
  return false;
}

function isSponsoredTest4(element, sponsorStr = 'Sponsored') {
  var els = element.querySelectorAll(LINK);

  // In this for loop, we try to read the text of each element for sponsorStr.
  for (const el of els) {
    var lines = {}; // Organize letters by line. Index is letter's offsetTop.
    var spans = el.querySelectorAll('span');

    // Each span has a letter. The spans are in random places.
    // In this for loop, we first organize all the spans by the same line.
    // We know they're on the same line if they have the same offsetTop.
    for (const span of spans) {
      if (span.firstChild) {
        var letter = span.firstChild.nodeValue;
        if (letter === null) {
          continue;
        }
        // Add to the appropriate line by offsetTop.
        var o = span.offsetTop;
        if (!lines[o]) {
          lines[o] = [];
        }
        lines[o].push({ letter, position: span.offsetLeft });
      }
    }

    // Now sort each line by their position in the line.
    // This is necessary since they // could appear randomly.
    for (var [_, line] of Object.entries(lines)) {
      line.sort(function(a, b) {
        return a.position - b.position;
      });
    }

    // Now detect which line has Sponsored string.
    for ([_, line] of Object.entries(lines)) {
      var fullstring = '';
      for (letter of line) {
        fullstring += letter.letter;
      }
      if (fullstring === sponsorStr) {
        return true;
      }
    }
  }
  return false;
}

// This test checks for SVG for sponsored.
function isSponsoredTest5(element, sponsorStr = 'Sponsored') {
  var els = element.querySelectorAll(LINK);
  for (const el of els) {
    var useEls = el.querySelectorAll('use');
    for (var useEl of useEls) {
      var href = useEl.getAttribute('xlink:href').substring(1); // Removes leading '#'
      var text = document.getElementById(href);
      var label = text.innerHTML;
      if (label === sponsorStr) {
        console.log('guo test5 pass');
        return true;
      }
    }
  }
  return false;
}

export default isSponsoredPost;
