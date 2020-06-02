import extractAds from 'content/youtube/utils/extractAds';
import extractRecommendations from 'content/youtube/utils/extractRecommendations';

import adAnalysis from 'content/youtube/adAnalysis';

jest.mock('content/youtube/utils/extractAds');
jest.mock('content/youtube/utils/extractRecommendations');

const data = { some: 'data' };
const ads = ['some', 'ads'];
const hostVideo = { id: '123', url: 'http://some.test.video' };
const recommendations = ['some', 'recommendations'];
const perms = { somePermission: true };

let result;

beforeAll(() => {
  extractAds.mockReturnValue({ ads, hostVideo });
  extractRecommendations.mockReturnValue(recommendations);

  result = adAnalysis(data, perms);
});

it('called extractAds with the data and perms', () => {
  expect(extractAds).toHaveBeenCalledWith(data, perms);
});

it('called extractRecommendations with the data and perms', () => {
  expect(extractRecommendations).toHaveBeenCalledWith(data, perms);
});

it('returned the expected result', () => {
  expect(result).toEqual({ ads, hostVideo, recommendations });
});
