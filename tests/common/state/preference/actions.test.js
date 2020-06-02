import actions from 'common/state/preference/actions';

import makeActionTester from '../makeActionTester';

const key = 'key';
const value = 'value';
const error = new Error('oops');

const testActions = makeActionTester(actions);

/*
LOAD_PREFERENCE: key => ({ key }),
LOAD_PREFERENCE_SUCCESS: (key, value) => ({ key, value }),
LOAD_PREFERENCE_FAILED: (key, error) => ({ key, error }),
SAVE_PREFERENCE: (key, value) => ({ key, value }),
SAVE_PREFERENCE_SUCCESS: (key, value) => ({ key, value }),
SAVE_PREFERENCE_FAILED: (key, error) => ({ key, error }),
PREFERENCE_CHANGED: (key, value) => ({ key, value })
*/
testActions({
  LOAD_PREFERENCE: [[key], { key }],
  LOAD_PREFERENCE_SUCCESS: [[key, value], { key, value }],
  LOAD_PREFERENCE_FAILED: [[key, error], error, { key }],
  SAVE_PREFERENCE: [[key, value], { key, value }],
  SAVE_PREFERENCE_SUCCESS: [[key, value], { key, value }],
  SAVE_PREFERENCE_FAILED: [[key, error], error, { key }],
  PREFERENCE_CHANGED: [[key, value], { key, value }]
});
