import React from 'react';
import PropTypes from 'prop-types';
import Player from 'youtube-embed-video';

import Card from '../../Card';

import './YouTubeRenderer.less';

const YouTubeRenderer = ({ item }) => {
  const { id: _id, itemType, advertiser, title, platformItemId, hostVideo } = item;

  const classes = `ati-item yt-item yt-${itemType}`;
  const host = `Extracted from ${hostVideo.url}`;

  return (
    <Card title={advertiser || title} subtitle={host}>
      <div className={classes}>
        {platformItemId ? (
          <Player
            videoId={platformItemId}
            suggestions={false}
            enhancedPrivacy={true}
            size="small"
          />
        ) : (
          <p>No Video Available</p>
        )}
      </div>
    </Card>
  );
};
YouTubeRenderer.displayName = 'YouTubeRenderer';

YouTubeRenderer.propTypes = {
  item: PropTypes.object.isRequired // determine a precise shape for this.
};

export default YouTubeRenderer;
