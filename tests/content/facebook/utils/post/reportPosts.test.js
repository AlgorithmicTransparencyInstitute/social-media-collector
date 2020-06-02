import makePermissionedPostTagger from 'content/facebook/utils/post/makePermissionedPostTagger';

import reportPosts from 'content/facebook/utils/post/reportPosts';

jest.mock('content/facebook/utils/post/makePermissionedPostTagger');

const cleanup = () => {
  makePermissionedPostTagger.mockReset();
};

const id = '123456';
const post = { id };
const permissions = {};
const version = 'pre2020';

const report = jest.fn();

beforeAll(async () => {
  makePermissionedPostTagger.mockReturnValue(report);
  await reportPosts([post], permissions, version);
});

afterAll(cleanup);

it('calls makePermissionedPostTagger with the permissions', () => {
  expect(makePermissionedPostTagger).toHaveBeenCalledWith(permissions, version);
});

it('calls report once with the post', () => {
  expect(report).toHaveBeenCalledTimes(1);
  expect(report).toHaveBeenCalledWith(post, 0, [post]);
});
