import makeItemId from 'common/utils/makeItemId';
import * as posts from 'content/facebook/posts';
import getFbDtsgFromPostElement from 'content/facebook/utils/id/getFbDtsgFromPostElement';
import sanitizePostContent from 'content/facebook/utils/post/sanitizePostContent';
import isPublicPost from 'content/facebook/utils/post/pre2020/isPublicPost';
import isSponsoredPost from 'content/facebook/utils/post/pre2020/isSponsoredPost';
import getPosterData from 'content/facebook/utils/post/pre2020/getPosterData';

import makeInitialPost from 'content/facebook/utils/post/pre2020/makeInitialPost';

jest.mock('common/utils/makeItemId');
jest.mock('content/facebook/posts');
jest.mock('content/facebook/utils/id/getFbDtsgFromPostElement');
jest.mock('content/facebook/utils/post/sanitizePostContent');
jest.mock('content/facebook/utils/post/pre2020/isPublicPost');
jest.mock('content/facebook/utils/post/pre2020/isSponsoredPost');
jest.mock('content/facebook/utils/post/pre2020/getPosterData');

const querySelector = jest.fn();
const getAttribute = jest.fn();

const element = { querySelector, getAttribute };
const fbDtsg = '23456787654';
const elem = 'some element';
const itemId = 'some item id';

const id = 'some-id';
const isUserPost = true;

const post = {
  // meta data used internally
  elem,
  id,
  isUserPost,
  fbDtsg,
  isInFeed: true,
  isProcessed: false,
  isSponsored: false,
  isPublic: false,
  adId: null,
  // the below is sent to the server.
  platform: 'facebook',
  itemId,
  observedAt: new Date().getTime(),
  itemType: null,
  platformItemId: null,
  payload: {}
};

const cleanup = () => {
  getAttribute.mockClear();
  querySelector.mockClear();
  posts.getSavedPost.mockReset();
  getPosterData.mockClear();
  sanitizePostContent.mockClear();
};

describe('when there is a nested element', () => {
  let result;

  beforeAll(() => {
    querySelector.mockReturnValue(elem);
    getAttribute.mockReturnValue(id);
  });

  describe('if there is already a post', () => {
    beforeAll(() => {
      posts.getSavedPost.mockReturnValue(post);
      result = makeInitialPost(element);
    });

    afterAll(cleanup);

    it('returns the expected value', () => {
      expect(result).toEqual(post);
    });
  });

  describe('if there is not already a post', () => {
    beforeAll(() => {
      makeItemId.mockReturnValue(itemId);
      getFbDtsgFromPostElement.mockReturnValue(fbDtsg);
      isPublicPost.mockReturnValue(true);
      isSponsoredPost.mockReturnValue(true);
      getPosterData.mockReturnValue({ isUserPost });
      sanitizePostContent.mockImplementation(html => html);
      posts.getSavedPost.mockReturnValue(undefined);
      posts.updateAndSavePost.mockReturnValue(post);
      result = makeInitialPost(element);
    });

    afterAll(cleanup);

    it('returns the expected value', () => {
      expect(result).toEqual(post);
    });
  });
});

describe('when there is no nested element', () => {
  beforeAll(() => {
    querySelector.mockReturnValue();
    makeInitialPost(element);
  });

  it('did not call getAttribute', () => {
    expect(getAttribute).not.toHaveBeenCalled();
  });
});
