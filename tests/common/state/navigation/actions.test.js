import actions from 'common/state/navigation/actions';

import makeActionTester from '../makeActionTester';

const destination = 'some-new-tab';
const current = 'some-tab';
const error = new Error('oops');

const testActions = makeActionTester(actions);

testActions({
  NAVIGATE: [[destination], { destination }],
  NAVIGATE_SUCCESS: [[current], { current }],
  NAVIGATE_FAILED: [[error], error],
  INIT: [[current], { current }]
});
