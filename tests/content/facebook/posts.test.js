import mergePosts from 'content/facebook/utils/post/mergePosts';

import { updateAndSavePost, reset } from 'content/facebook/posts';

jest.mock('content/facebook/utils/post/mergePosts');

const cleanup = () => {
  mergePosts.mockClear();
  reset();
};

const fbDtsg = 'fbDtsg';
const id = 'some-excellent-id';
const itemId = '123456';
const payload = { contentHtml: 'something' };

const makePost = (fields = {}) => {
  const outerHTML = fields.elem && fields.elem.outerHTML ? fields.elem.outerHTML : '';
  const elem = { outerHTML };

  return {
    id,
    itemId,
    payload,
    fbDtsg,
    isProcessed: false,
    isSponsored: true,
    isPublic: true,
    ...fields,
    elem
  };
};

describe('updateAndSavePost', () => {
  describe('when there is nothing in memory', () => {
    const post = makePost();

    beforeAll(() => {
      mergePosts.mockReturnValue(post);

      updateAndSavePost(post);
    });

    afterAll(cleanup);

    it('called mergePosts with { id } and the remaining post data', () => {
      const { id: theId, ...restOfPost } = post;
      expect(mergePosts).toHaveBeenCalledWith({ id: theId }, restOfPost);
    });
  });
});
