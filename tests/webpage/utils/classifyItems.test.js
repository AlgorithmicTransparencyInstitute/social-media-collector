import classifyItems from 'webpage/utils/classifyItems';

const observedAt = new Date('2020-02-02T00:00:00Z').getTime();
const hostVideo = { id: '1234', url: 'https://www.youtube.com' };
const sponsoredPost = {
  platform: 'facebook',
  itemType: 'sponsoredPost',
  observedAt
};
const publicUserPost = {
  platform: 'facebook',
  itemType: 'publicUserPost',
  observedAt
};
const publicPagePost = {
  platform: 'facebook',
  itemType: 'publicPagePost',
  observedAt
};
const youtubeAd = {
  platform: 'youtube',
  itemType: 'actionCompanionAd',
  hostVideo,
  observedAt: observedAt + 1
};
const youtubeRecommendation = {
  platform: 'youtube',
  itemType: 'recommendedVideo',
  hostVideo,
  observedAt: observedAt
};
const badFb = { platform: 'facebook', itemType: 'huh?', observedAt };
const nonsense = { platform: 'whatever', observedAt };

const items = [
  sponsoredPost,
  publicUserPost,
  publicPagePost,
  youtubeAd,
  youtubeRecommendation,
  badFb,
  nonsense
];

const expected = {
  facebookAds: [sponsoredPost],
  facebookUserPosts: [publicUserPost],
  facebookPagePosts: [publicPagePost],
  youtubeAds: [youtubeAd],
  youtubeRecommendations: [youtubeRecommendation],
  youtubeVideos: [{ ...hostVideo, related: [youtubeAd, youtubeRecommendation], observedAt }]
};

let result;

beforeAll(() => {
  result = classifyItems(items);
});

it('returned the correct result', () => {
  expect(result).toEqual(expected);
});
