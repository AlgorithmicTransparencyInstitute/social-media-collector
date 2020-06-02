import getAdTargeting from 'content/facebook/utils/ad/pre2020/getAdTargeting';
import * as posts from 'content/facebook/posts';

import extractAdIdFromPost from 'content/facebook/utils/ad/pre2020/extractAdIdFromPost';

jest.mock('content/facebook/posts');
jest.mock('content/facebook/utils/ad/pre2020/getAdTargeting');

const cleanup = () => {
  getAdTargeting.mockReset();
  posts.updateAndSavePost.mockReset();
};

describe('when it works', () => {
  const post = { elem: 'some element' };
  const adId = '123456788';

  beforeAll(async () => {
    getAdTargeting.mockResolvedValue({ adId });
    posts.updateAndSavePost.mockResolvedValue();
    await extractAdIdFromPost(post);
  });

  afterAll(cleanup);

  it('called updateAndSavePost', () => {
    expect(posts.updateAndSavePost).toHaveBeenCalledWith({ ...post, adId });
  });
});

describe('when it works but does not return an adId', () => {
  const post = { elem: 'some element' };

  beforeAll(async () => {
    getAdTargeting.mockResolvedValue({});
    await extractAdIdFromPost(post);
  });

  afterAll(cleanup);

  it('did not call updateAndSavePost', () => {
    expect(posts.updateAndSavePost).not.toHaveBeenCalled();
  });
});
