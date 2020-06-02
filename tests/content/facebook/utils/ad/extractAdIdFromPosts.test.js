import extractAdIdFromPre2020Post from 'content/facebook/utils/ad/pre2020/extractAdIdFromPost';
import extractAdIdFromPost2020Post from 'content/facebook/utils/ad/post2020/extractAdIdFromPost';

import extractAdIdFromPosts from 'content/facebook/utils/ad/extractAdIdFromPosts';

import { VERSION } from 'content/facebook/constants';

jest.mock('content/facebook/utils/ad/pre2020/extractAdIdFromPost');
jest.mock('content/facebook/utils/ad/post2020/extractAdIdFromPost');

const posts = ['some', 'post'];

const cleanup = () => {
  extractAdIdFromPre2020Post.mockReset();
  extractAdIdFromPost2020Post.mockReset();
};

const doTest = version => {
  const isOldVersion = version === VERSION.PRE_2020;

  describe(`when version is '${version}'`, () => {
    const [extractAdIdFromPost, mockValue, failure] = isOldVersion
      ? [
          extractAdIdFromPre2020Post,
          'mockResolvedValue',
          () => {
            throw new Error('oops');
          }
        ]
      : [extractAdIdFromPost2020Post, 'mockReturnValue', () => {}];

    describe('when it works', () => {
      beforeAll(async () => {
        extractAdIdFromPost[mockValue]();
        await extractAdIdFromPosts(posts, version);
      });

      afterAll(cleanup);

      it('called extractAdIdFromPost twice', () => {
        expect(extractAdIdFromPost).toHaveBeenCalledTimes(posts.length);
      });
    });

    describe('when it fails', () => {
      beforeAll(async () => {
        extractAdIdFromPost.mockImplementation(failure);

        await extractAdIdFromPosts(posts, version);
      });

      afterAll(cleanup);

      it(`called extractAdIdFromPost once ${isOldVersion ? 'once' : 'twice'}`, () => {
        expect(extractAdIdFromPost).toHaveBeenCalledTimes(isOldVersion ? 1 : 2);
      });
    });
  });
};

Object.values(VERSION).forEach(doTest);
