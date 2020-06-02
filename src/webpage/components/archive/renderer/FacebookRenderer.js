import React from 'react';
import PropTypes from 'prop-types';

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

const FacebookRenderer = ({ item }) => {
  const {
    id,
    itemId: _itemId,
    itemType,
    payload: { contentHtml: html }
  } = item;

  const classes = `ati-item fb-item fb-${itemType}`;

  return (
    <div className="archive-item">
      <div id={id} className={classes} dangerouslySetInnerHTML={{ __html: html }} />
      <AdTargeting item={item} />
    </div>
  );
};

FacebookRenderer.propTypes = {
  item: PropTypes.shape(itemShape).isRequired
};

export default FacebookRenderer;
