import { savePermission } from 'common/storage/permission';
import * as keys from 'common/keys';

const permissions = JSON.parse(process.env.PERMISSIONS);

const defaults = Object.keys(permissions).reduce((acc, elem) => {
  const key = keys[elem];
  const value = permissions[elem].defaultValue || false;

  acc.push({ key, value });
  return acc;
}, []);

const setAlldefaults = async () =>
  Promise.all(defaults.map(({ key, value }) => savePermission(key, value)));

export default setAlldefaults;
