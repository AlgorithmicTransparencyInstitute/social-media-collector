import React from 'react';
import PropTypes from 'prop-types';
import Player from 'youtube-embed-video';

import Card from '../../Card';

import './YouTubeRenderer.less';

const YouTubeHostVideoRenderer = ({ item }) => {
  const classes = 'ati-item yt-item';

  return (
    <Card title={item.title} subtitle={item.author}>
      <div className={classes}>
        <Player videoId={item.id} suggestions={false} enhancedPrivacy={true} size="small" />
      </div>
    </Card>
  );
};

YouTubeHostVideoRenderer.displayName = 'YouTubeHostVideoRenderer';

YouTubeHostVideoRenderer.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    channelId: PropTypes.string,
    url: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string
  }).isRequired // determine a precise shape for this.
};

export default YouTubeHostVideoRenderer;
