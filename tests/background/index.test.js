import { start } from 'background';

import * as messaging from 'messaging';
import * as ui from 'background/ui';
import * as versioning from 'background/versioning';
import registerUploadListener from 'background/utils/registerUploadListener';

jest.mock('messaging');
jest.mock('background/ui');
jest.mock('background/versioning');
jest.mock('background/utils/registerUploadListener');

beforeAll(async () => {
  versioning.start.mockResolvedValue();
  ui.start.mockResolvedValue();
  await start();
});

afterAll(() => {
  versioning.start.mockReset();
  ui.start.mockReset();
});

[versioning, ui, messaging].forEach(mod => {
  it('started', () => {
    expect(mod.start).toHaveBeenCalled();
  });
});

it('registered the upload listener', () => {
  expect(registerUploadListener).toHaveBeenCalled();
});
