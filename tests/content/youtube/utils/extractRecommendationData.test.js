import * as crypto from 'common/utils/crypto';
import extractVideoId from 'content/youtube/utils/extractVideoId';

import extractRecommendationData from 'content/youtube/utils/extractRecommendationData';

jest.mock('common/utils/crypto');
jest.mock('content/youtube/utils/extractVideoId');

const author = 'some author';
const viewCountText = 'some view count';
const videoId = '12345';
const title = 'some title';
const tooltip = 'some tooltip';
const authorChannelId = 'some authorChannelId';
const authorChannelPath = 'some authorChannelPath';

const hostUrl = `http://www.youtube.com?v=${videoId}`;
const hostVideo = { id: videoId, url: hostUrl };
const id = '1223';

const renderer = {
  longBylineText: {
    runs: [
      {
        text: author,
        navigationEndpoint: {
          browseEndpoint: {
            browseId: authorChannelId,
            canonicalBaseUrl: authorChannelPath
          }
        }
      }
    ]
  },
  viewCountText,
  videoId,
  title: { simpleText: title }
};

beforeAll(() => {
  extractVideoId.mockReturnValue(videoId);
  crypto.hash.mockReturnValue(id);
});

describe('when given ownerBadges', () => {
  const ownerBadges = [{ metadataBadgeRenderer: { tooltip } }];

  const expected = {
    id,
    type: 'recommendedVideo',
    videoId,
    title,
    author,
    authorChannelId,
    authorChannelPath,
    viewCountText,
    badges: [tooltip],
    hostVideo
  };

  it('returns the expected result', () => {
    expect(extractRecommendationData({ ...renderer, ownerBadges }, hostUrl)).toEqual(expected);
  });
});

describe('when not given ownerBadges', () => {
  const expected = {
    id,
    type: 'recommendedVideo',
    videoId,
    title,
    author,
    authorChannelId,
    authorChannelPath,
    viewCountText,
    badges: [],
    hostVideo
  };

  it('returns the expected result', () => {
    expect(extractRecommendationData(renderer, hostUrl)).toEqual(expected);
  });
});

describe('when not given a renderer', () => {
  it('returns null', () => {
    expect(extractRecommendationData()).toBeNull();
  });
});
