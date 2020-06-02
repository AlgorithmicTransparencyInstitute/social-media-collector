import { getItem, setItem } from 'common/storage';
import * as keys from 'common/keys';

const rawPerms = JSON.parse(process.env.PERMISSIONS);
const permissions = Object.keys(rawPerms).reduce((acc, elem) => {
  const key = keys[elem];
  acc[key] = rawPerms[elem].defaultValue || false;
  return acc;
}, {});

/**
 *  Check the permission with the given key to see if it's been granted.
 *  If we've already retreived the permission from local storage then don't
 *  bother getting it again for this session.
 *
 *  @param key — The permission key to check
 *  @param defaultValue — An optional default value, defaults to false
 *  @return true if the permission has been granted or the defaultValue
 *  if we don't know about it.
 */
export const checkPermission = async (key, deflt) => {
  const defaultValue =
    deflt !== undefined ? deflt : permissions[key] !== undefined ? permissions[key] : false;

  return getItem(key, defaultValue);
};

/**
 *  Sets the permission with the given key to true or false.
 *
 *  @param key — The key of the permission to grant
 *  @param value — coerced to true or false
 */
export const savePermission = async (key, value) => setItem(key, Boolean(value));
