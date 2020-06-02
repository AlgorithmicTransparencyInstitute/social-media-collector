import getAdIdAndToken from 'content/facebook/utils/ad/post2020/getAdIdAndToken';
import * as posts from 'content/facebook/posts';

import extractAdIdFromPost from 'content/facebook/utils/ad/post2020/extractAdIdFromPost';

jest.mock('content/facebook/utils/ad/post2020/getAdIdAndToken');
jest.mock('content/facebook/posts');

const elem = { parentElement: 'some element' };
const post = { elem };
const adId = '12345';
const clientToken = '54321';

beforeAll(async () => {
  getAdIdAndToken.mockResolvedValue({ adId, clientToken });
  await extractAdIdFromPost(post);
});

it('called getAdIdAndToken with the element', () => {
  expect(getAdIdAndToken).toHaveBeenCalledWith(elem.parentElement);
});

it('called updateAndSavePost with the updated post', () => {
  expect(posts.updateAndSavePost).toHaveBeenCalledWith({
    elem,
    adId,
    clientToken
  });
});
