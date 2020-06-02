import * as permission from 'common/storage/permission';
import * as keys from 'common/keys';

import setDefaultV3Permissions, {
  EXCLUDED_PERMISSIONS
} from 'background/versioning/setDefaultV3Permissions';

jest.mock('common/storage/permission');

beforeAll(async () => {
  permission.savePermission.mockResolvedValue();
  await setDefaultV3Permissions();
});

EXCLUDED_PERMISSIONS.forEach(key => {
  it(`set ${permission} to false`, () => {
    expect(permission.savePermission).toHaveBeenCalledWith(keys[key], false);
  });
});

it(`called savePermission ${EXCLUDED_PERMISSIONS.length} times`, () => {
  expect(permission.savePermission).toHaveBeenCalledTimes(EXCLUDED_PERMISSIONS.length);
});
