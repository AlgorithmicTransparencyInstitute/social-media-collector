import trimPost from 'content/facebook/utils/post/trimPost';

const id = '12345678deadbeefcafebabe';

const platform = 'facebook';
const itemId = 'some item id';
const observedAt = new Date().getTime();
const contentHtml = '<div id="content"></div>';
const adTargetingData = JSON.stringify({ some: 'ad targeting data' });
const adTargetingHtml = '<div id="ad-targeting"></div>';
const otherCrap = 'all manner of other crap';
const postedBy = 'someone';
const url = 'http://some-excellent-url';
const version = 'post2020';

describe('when it is a sponsored post', () => {
  const adId = 'some-ad-id';

  const post = {
    id,
    url,
    platform,
    version,
    itemId,
    isSponsored: true,
    isPublic: true,
    adId,
    observedAt,
    postedBy,
    payload: { contentHtml, adTargetingData, adTargetingHtml },
    otherCrap
  };

  const expected = {
    id,
    url,
    platform,
    version,
    itemId,
    observedAt,
    postedBy,
    platformItemId: adId,
    itemType: 'sponsoredPost',
    payload: {
      adTargetingHtml,
      adTargetingData,
      contentHtml
    }
  };

  it('returns the expected result', () => {
    expect(trimPost(post)).toEqual(expected);
  });
});

describe('when it is not a sponsored post', () => {
  describe('when it is a public post', () => {
    const post = {
      id,
      url,
      platform,
      version,
      itemId,
      isSponsored: false,
      isPublic: true,
      adId: null,
      observedAt,
      postedBy,
      payload: { contentHtml },
      otherCrap
    };

    const expected = {
      id,
      url,
      platform,
      version,
      itemId,
      observedAt,
      postedBy,
      payload: {
        contentHtml
      }
    };

    describe('user post', () => {
      it('returns the expected result', () => {
        expect(trimPost({ ...post, isUserPost: true })).toEqual({
          ...expected,
          itemType: 'publicUserPost'
        });
      });
    });

    describe('page post', () => {
      it('returns the expected result', () => {
        expect(trimPost({ ...post, isUserPost: false })).toEqual({
          ...expected,
          itemType: 'publicPagePost'
        });
      });
    });
  });

  describe('when it is a private post', () => {
    const post = {
      id,
      url,
      platform,
      version,
      itemId,
      isSponsored: false,
      isPublic: false,
      adId: null,
      observedAt,
      payload: { contentHtml },
      otherCrap
    };

    const expected = {
      id,
      platform,
      version,
      itemId,
      observedAt,
      itemType: 'privatePost',
      payload: {}
    };

    it('returns the expected result', () => {
      expect(trimPost(post)).toEqual(expected);
    });
  });
});
