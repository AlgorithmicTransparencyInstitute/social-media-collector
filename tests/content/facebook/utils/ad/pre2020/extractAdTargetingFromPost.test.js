import DOMPurify from 'dompurify';

import getAdTargeting from 'content/facebook/utils/ad/pre2020/getAdTargeting';
import getAdTargetingData from 'content/facebook/utils/ad/pre2020/getAdTargetingData';
import extractAdTargetingHtml from 'content/facebook/utils/ad/extractAdTargetingHtml';
import * as posts from 'content/facebook/posts';
import * as feedScanner from 'content/facebook/feedScanner';

import extractAdTargetingFromPost from 'content/facebook/utils/ad/pre2020/extractAdTargetingFromPost';

jest.mock('dompurify');
jest.mock('content/facebook/utils/ad/pre2020/getAdTargeting');
jest.mock('content/facebook/utils/ad/pre2020/getAdTargetingData');
jest.mock('content/facebook/utils/ad/extractAdTargetingHtml');
jest.mock('content/facebook/posts');
jest.mock('content/facebook/feedScanner');

const elem = {};
const fbDtsg = 'fbDtsg';
const payload = { someOther: 'data' };
const post = { elem, fbDtsg, payload };

const adTargetingUrl = 'https://some-ad-targeting.tes';
const adId = '123445678';
const jsmods = {};
const adTargeting = { adTargetingUrl, adId, jsmods };
const adTargetingHtml = '<div>some ad targeting html</div>';
const adTargetingData = { some: 'ad tareting data' };

describe('when it works', () => {
  const expected = {
    ...post,
    adTargetingUrl,
    adId,
    payload: {
      ...payload,
      adTargetingHtml,
      adTargetingData
    }
  };

  beforeAll(async () => {
    getAdTargeting.mockResolvedValue(adTargeting);
    extractAdTargetingHtml.mockReturnValue(adTargetingHtml);
    getAdTargetingData.mockResolvedValue(adTargetingData);
    DOMPurify.sanitize.mockImplementation(i => i);

    await extractAdTargetingFromPost(post);
  });

  afterAll(() => {
    getAdTargeting.mockReset();
    extractAdTargetingHtml.mockReset();
    getAdTargetingData.mockReset();
    DOMPurify.mockReset();
  });

  it('called updateAndSavePost with the expected data', () => {
    expect(posts.updateAndSavePost).toHaveBeenCalledWith(expected);
  });
});

let result;

describe('when it fails', () => {
  const error = new Error('oops');

  const cleanup = () => {
    getAdTargeting.mockClear();
    extractAdTargetingHtml.mockClear();
    getAdTargetingData.mockClear();
    DOMPurify.mockClear();
    feedScanner.suspend.mockClear();
    posts.updateAndSavePost.mockClear();
  };

  describe('when getAdTargeting returns okay', () => {
    describe('when there is an adId', () => {
      describe('when there are jsmods', () => {
        beforeAll(() => {
          getAdTargeting.mockResolvedValue(adTargeting);
        });

        describe('when getAdTargetingData works', () => {
          beforeAll(() => {
            getAdTargetingData.mockResolvedValue(adTargetingData);
          });

          describe('when updateAndSavePost fails', () => {
            beforeAll(async () => {
              posts.updateAndSavePost.mockImplementation(() => {
                throw error;
              });

              try {
                await extractAdTargetingFromPost(post);
              } catch (err) {
                result = err;
              }
            });

            afterAll(cleanup);

            it('called updateAndSavePost', () => {
              expect(posts.updateAndSavePost).toHaveBeenCalled();
            });

            it('returned an error', () => {
              expect(result).toBeInstanceOf(Error);
            });
          });
        });

        describe('when getAdTargetingData fails', () => {
          beforeAll(async () => {
            getAdTargetingData.mockImplementation(() => {
              throw error;
            });
            try {
              await extractAdTargetingFromPost(post);
            } catch (err) {
              result = err;
            }
          });

          afterAll(cleanup);

          it('called getAdTargetingData', () => {
            expect(getAdTargetingData).toHaveBeenCalled();
          });

          it('returned an error', () => {
            expect(result).toBeInstanceOf(Error);
          });
        });
      });

      describe('when there are no jsmods', () => {
        const { jsmods: _jsmods, ...aTarg } = adTargeting;

        beforeAll(async () => {
          getAdTargeting.mockResolvedValue(aTarg);
          try {
            await extractAdTargetingFromPost(post);
          } catch (err) {
            result = err;
          }
        });

        afterAll(cleanup);

        it('called getAdTargeting', () => {
          expect(getAdTargeting).toHaveBeenCalled();
        });

        it('called suspend', () => {
          expect(feedScanner.suspend).toHaveBeenCalled();
        });

        it('returned an error', () => {
          expect(result).toBeInstanceOf(Error);
        });
      });
    });
    describe('when there is no adId', () => {
      const { adId: _adId, ...aTarg } = adTargeting;

      beforeAll(async () => {
        getAdTargeting.mockResolvedValue(aTarg);
        result = await extractAdTargetingFromPost(post);
      });

      afterAll(cleanup);

      it('called getAdTargeting', () => {
        expect(getAdTargeting).toHaveBeenCalled();
      });

      it('returned undefined', () => {
        expect(result).toBeUndefined();
      });
    });
  });

  describe('when getAdTargeting fails', () => {
    beforeAll(async () => {
      getAdTargeting.mockImplementation(() => {
        throw error;
      });
      try {
        await extractAdTargetingFromPost(post);
      } catch (err) {
        result = err;
      }
    });

    it('returned an error', () => {
      expect(result).toEqual(error);
    });
  });
});
