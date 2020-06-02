const makePost = (hostVideo, itemId) => ({ adId, videoId, type: itemType, ...data }) => ({
  ...data,
  platform: 'youtube',
  hostVideo,
  itemType,
  itemId,
  platformItemId: adId || videoId,
  observedAt: new Date().getTime()
});

export default makePost;
