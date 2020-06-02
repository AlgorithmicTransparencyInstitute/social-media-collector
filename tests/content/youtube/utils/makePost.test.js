import makePost from 'content/youtube/utils/makePost';

const hostVideo = 'https://www.youtube.com';
const itemId = '123456';
const itemType = 'some item type';
const videoId = 'some video id';

const postMaker = makePost(hostVideo, itemId);

const data = { some: 'data' };

let result;

describe('when there is no adId', () => {
  const expected = {
    ...data,
    platform: 'youtube',
    hostVideo,
    itemType,
    itemId,
    platformItemId: videoId,
    observedAt: expect.any(Number)
  };

  beforeAll(() => {
    result = postMaker({
      videoId,
      type: itemType,
      ...data
    });
  });

  it('returned the expected result', () => {
    expect(result).toEqual(expected);
  });
});

describe('when there is an adId', () => {
  const adId = '43567';

  const expected = {
    ...data,
    platform: 'youtube',
    hostVideo,
    itemType,
    itemId,
    platformItemId: adId,
    observedAt: expect.any(Number)
  };

  beforeAll(() => {
    result = postMaker({
      adId,
      videoId,
      type: itemType,
      ...data
    });
  });

  it('returned the expected result', () => {
    expect(result).toEqual(expected);
  });
});
