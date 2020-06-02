import * as permission from 'common/storage/permission';

import setDefaultGlobeAndMailPermissions from 'background/versioning/setDefaultGlobeAndMailPermissions';

jest.mock('common/storage/permission');

beforeAll(async () => {
  permission.savePermission.mockResolvedValue();
  await setDefaultGlobeAndMailPermissions();
});

// NOTE: see test perm defaults in jest.init.js
[
  ['show_debug_data', true],
  ['user_share_diagnostic_data', false],
  ['facebook_show_collection_status', false]
].forEach(([key, value]) => {
  it(`set ${key} to ${value}`, () => {
    expect(permission.savePermission).toHaveBeenCalledWith(key, value);
  });
});
