import React from 'react';
import PropTypes from 'prop-types';

import FacebookRenderer from './renderer/FacebookRenderer';
import YouTubeRenderer from './renderer/YouTubeRenderer';
import YouTubeHostVideoRenderer from './renderer/YouTubeHostVideoRenderer';

const renderItem = item => {
  const Renderer =
    item.platform === 'facebook'
      ? FacebookRenderer
      : item.platform === 'youtube'
      ? YouTubeRenderer
      : YouTubeHostVideoRenderer;

  return <Renderer key={item.id} item={item} />;
};

const ArchiveList = ({ items }) => {
  return <div className="d-flex flex-wrap pw">{items.map(renderItem)}</div>;
};
ArchiveList.displayName = 'ArchiveList';

ArchiveList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })).isRequired
};

export default ArchiveList;
