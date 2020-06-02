import trimTargeting from 'content/youtube/utils/trimTargeting';
import extractAds from 'content/youtube/utils/extractAds';
import extractAdPlacements from 'content/youtube/utils/extractAdPlacements';

jest.mock('content/youtube/utils/extractAdPlacements');
jest.mock('content/youtube/utils/trimTargeting');

const URLS = ['/get_midroll_info?', '/watch?v='].map(path => 'https://www.youtube.com' + path);

const ads = ['some', 'ad'];
const author = 'some author';
const title = 'some title';
const channelId = 'some channel id';
const id = '123456';
const adReasons = ['some', 'adReasons'];
const adPlacements = ['some', 'adPlacements'];
const perms = {
  shareWatched: true,
  shareRecommended: true,
  shareAds: true,
  shareAdTargeting: true
};
// host video
const hostId = '66554433';
const hostUrl = `https://www.youtube.com?v=${hostId}`;
const expectedHostVideo = {
  url: hostUrl,
  id: hostId
};

let result;

const cleanup = () => {
  trimTargeting.mockClear();
  extractAdPlacements.mockClear();
};

beforeAll(() => {
  trimTargeting.mockImplementation(i => i);
  extractAdPlacements.mockReturnValue(ads);
});

describe('when watch url', () => {
  describe('given adReasons', () => {
    describe('given title and author', () => {
      const body = [
        {},
        {},
        { player: { args: { author, title } }, playerAds: ads, adReasons },
        {
          playerResponse: {
            adPlacements,
            videoDetails: { videoId: hostId, channelId, author, title }
          }
        }
      ];

      const url = 'https://www.youtube.com/watch?v=' + id;

      const data = { body, url, hostUrl, URLS };

      describe('when sharing ads', () => {
        const expected = {
          ads,
          hostVideo: {
            ...expectedHostVideo,
            channelId,
            author,
            title
          }
        };

        describe('when not sharing ad targeting', () => {
          beforeAll(() => {
            result = extractAds(data, { ...perms, shareAdTargeting: false });
          });

          afterAll(cleanup);

          it('called trimTargeting', () => {
            expect(trimTargeting).toHaveBeenCalled();
          });

          it('returns the expected result', () => {
            expect(result).toEqual(expected);
          });
        });

        describe('when sharing ad targeting', () => {
          describe('when sharing watched videos', () => {
            beforeAll(() => {
              result = extractAds(data, perms);
            });

            afterAll(cleanup);

            it('did not call trimTargeting', () => {
              expect(trimTargeting).not.toHaveBeenCalled();
            });

            it('returns the expected result', () => {
              expect(result).toEqual(expected);
            });
          });

          describe('when not sharing watched videos', () => {
            beforeAll(() => {
              result = extractAds(data, { ...perms, shareWatched: false });
            });

            afterAll(cleanup);

            it('did not call trimTargeting', () => {
              expect(trimTargeting).not.toHaveBeenCalled();
            });

            it('returns the expected result', () => {
              expect(result).toEqual({ ...expected, hostVideo: undefined });
            });
          });
        });
      });

      describe('when not sharing ads', () => {
        describe('when sharing watched', () => {
          const expected = {
            hostVideo: expectedHostVideo
          };

          beforeAll(() => {
            result = extractAds(data, { ...perms, shareAds: false });
          });

          afterAll(cleanup);

          it('returns the expected result', () => {
            expect(result).toEqual(expected);
          });
        });

        describe('when not sharing watched', () => {
          const expected = {
            hostVideo: undefined
          };

          beforeAll(() => {
            result = extractAds(data, {
              ...perms,
              shareAds: false,
              shareWatched: false
            });
          });

          afterAll(cleanup);

          it('returns the expected result', () => {
            expect(result).toEqual(expected);
          });
        });
      });
    });

    describe('missing video id', () => {
      const body = [
        {},
        {},
        { player: { args: { author, title } }, playerAds: ads, adReasons },
        {
          playerResponse: {
            adPlacements,
            videoDetails: { channelId, author, title }
          }
        }
      ];

      const url = 'https://www.youtube.com/watch?v=' + id;

      const data = { body, url, hostUrl, URLS };
      const expected = {
        ads,
        hostVideo: {
          ...expectedHostVideo,
          channelId,
          author,
          title
        }
      };

      beforeAll(() => {
        result = extractAds(data, perms);
      });

      afterAll(cleanup);

      it('returns the expected result', () => {
        expect(result).toEqual(expected);
      });
    });

    describe('missing player', () => {
      const body = [
        {},
        {},
        { adReasons },
        {
          playerResponse: {
            adPlacements,
            videoDetails: { videoId: hostId, channelId, author, title }
          }
        }
      ];

      const url = 'https://www.youtube.com/watch?v=' + id;

      const data = { body, url, hostUrl, URLS };
      const expected = {
        ads,
        hostVideo: {
          ...expectedHostVideo,
          channelId,
          author,
          title
        }
      };

      beforeAll(() => {
        result = extractAds(data, perms);
      });

      afterAll(cleanup);

      it('returns the expected result', () => {
        expect(result).toEqual(expected);
      });
    });

    describe('not given title and author', () => {
      const body = [
        {},
        {},
        { player: { args: { author, title } }, playerAds: ads, adReasons },
        {
          playerResponse: {
            adPlacements,
            videoDetails: { videoId: hostId, channelId }
          }
        }
      ];

      const url = 'https://www.youtube.com/watch?v=' + id;

      const data = { body, url, hostUrl, URLS };
      const expected = {
        ads,
        hostVideo: {
          ...expectedHostVideo,
          channelId,
          author,
          title
        }
      };

      beforeAll(() => {
        result = extractAds(data, perms);
      });

      afterAll(cleanup);

      it('returns the expected result', () => {
        expect(result).toEqual(expected);
      });
    });

    describe('given insufficient data in body', () => {
      const body = [{}, {}, { player: { args: { author, title } }, playerAds: ads, adReasons }];

      const url = 'https://www.youtube.com/watch?v=' + id;

      const data = { body, url, hostUrl, URLS };
      const expected = { hostVideo: expectedHostVideo };

      beforeAll(() => {
        result = extractAds(data, perms);
      });

      afterAll(cleanup);

      it('returns the expected result', () => {
        expect(result).toEqual(expected);
      });
    });
  });

  describe('not given adReasons', () => {
    const body = [
      {},
      {},
      { player: { args: { author, title } }, playerAds: ads },
      {
        playerResponse: {
          adPlacements,
          videoDetails: { videoId: id, channelId, author, title }
        }
      }
    ];

    const url = 'https://www.youtube.com/watch?v=' + id;

    const data = { body, url, hostUrl, URLS };
    const expected = { hostVideo: expectedHostVideo };

    beforeAll(() => {
      result = extractAds(data, perms);
    });

    afterAll(cleanup);

    it('returns the expected result', () => {
      expect(result).toEqual(expected);
    });
  });
});

describe('when mid stream url', () => {
  const body = { playerAds: ads };

  const url = 'https://www.youtube.com/get_midroll_info?v=8765';

  const data = { body, url, hostUrl, URLS };

  const expected = {
    ads,
    hostVideo: expectedHostVideo
  };

  describe('when sharing ad targeting', () => {
    beforeAll(() => {
      result = extractAds(data, perms);
    });

    afterAll(cleanup);

    it('did not call trimTargeting', () => {
      expect(trimTargeting).not.toHaveBeenCalled();
    });

    it('returns the expected result', () => {
      expect(result).toEqual(expected);
    });
  });

  describe('when not sharing ad targeting', () => {
    beforeAll(() => {
      result = extractAds(data, { ...perms, shareAdTargeting: false });
    });

    afterAll(cleanup);

    it('called trimTargeting', () => {
      expect(trimTargeting).toHaveBeenCalled();
    });

    it('returns the expected result', () => {
      expect(result).toEqual(expected);
    });
  });
});

describe('when neither watch url nor mid stream url', () => {
  const body = {};

  const url = 'https://www.youtube.com?somethingelse=8765';

  const data = { body, url, hostUrl, URLS };
  const expected = { hostVideo: expectedHostVideo };

  beforeAll(() => {
    result = extractAds(data, perms);
  });

  afterAll(cleanup);

  it('returns the expected result', () => {
    expect(result).toEqual(expected);
  });
});
