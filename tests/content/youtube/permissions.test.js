import * as permission from 'common/storage/permission';
import * as keys from 'common/keys';

import permissions from 'content/youtube/utils/permissions';

jest.mock('common/storage/permission');

beforeAll(async () => {
  permission.checkPermission.mockResolvedValue(true);
  await permissions();
});

[
  'YT_SHARE_WATCHED_VIDEOS',
  'YT_SHARE_RECOMMENDED_VIDEOS',
  'YT_SHARE_ADS',
  'YT_SHARE_AD_TARGETING'
].forEach(key => {
  it(`called checkPermission with ${keys[key]} and false`, () => {
    expect(permission.checkPermission).toHaveBeenCalledWith(keys[key], false);
  });
});
