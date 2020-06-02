import { CS, BS } from 'messaging';
import { UPLOAD_POSTS } from 'common/actions';
import * as registry from 'messaging/registry';
import * as api from 'background/api';

import registerUploadListener from 'background/utils/registerUploadListener';

jest.mock('messaging/registry');
jest.mock('background/api');

beforeAll(() => {
  registerUploadListener();
});

afterAll(() => {
  registry.registerListener.mockClear();
});

it('regsitered the correct listener', () => {
  expect(registry.registerListener).toHaveBeenCalledWith(
    CS,
    BS,
    UPLOAD_POSTS,
    api.uploadObservation
  );
});
