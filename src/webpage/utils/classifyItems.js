const classifyItems = items => {
  const results = {
    facebookAds: [],
    facebookUserPosts: [],
    facebookPagePosts: [],
    youtubeAds: [],
    youtubeRecommendations: [],
    youtubeVideos: []
  };

  const classifyFacebook = item => {
    switch (item.itemType) {
      case 'sponsoredPost': {
        results.facebookAds.push(item);
        break;
      }
      case 'publicUserPost': {
        results.facebookUserPosts.push(item);
        break;
      }
      case 'publicPagePost': {
        results.facebookPagePosts.push(item);
        break;
      }
      default: {
        console.error('Unknown item type', item);
      }
    }
  };

  const classifyYoutube = item => {
    /* istanbul ignore else */
    if (item.hostVideo) {
      const vid = results.youtubeVideos.find(({ id }) => id === item.hostVideo.id);
      if (vid) {
        vid.related.push(item);
        /* istanbul ignore else */
        if (vid.observedAt > item.observedAt) vid.observedAt = item.observedAt;
      } else {
        results.youtubeVideos.push({
          ...item.hostVideo,
          related: [item],
          observedAt: item.observedAt
        });
      }
    }

    if (item.itemType === 'recommendedVideo') {
      results.youtubeRecommendations.push(item);
    } else {
      results.youtubeAds.push(item);
    }
  };

  const classify = key => {
    const item = items[key];

    if (item.platform === 'facebook') {
      classifyFacebook(item);
    } else if (item.platform === 'youtube') {
      classifyYoutube(item);
    } // else ... future platforms
  };

  Object.keys(items).forEach(classify);

  return results;
};

export default classifyItems;
