import actions from 'common/state/permission/actions';

import makeActionTester from '../makeActionTester';

const key = 'key';
const value = 'value';
const error = new Error('oops');
const defaultValue = true;

const testActions = makeActionTester(actions);

testActions({
  LOAD_PERMISSION: [[key, defaultValue], { key, defaultValue }],
  LOAD_PERMISSION_SUCCESS: [[key, value], { key, value }],
  LOAD_PERMISSION_FAILED: [[key, error], error, { key }],
  SAVE_PERMISSION: [[key, value], { key, value }],
  SAVE_PERMISSION_SUCCESS: [[key, value], { key, value }],
  SAVE_PERMISSION_FAILED: [[key, error], error, { key }],
  PERMISSION_CHANGED: [[key, value], { key, value }]
});
