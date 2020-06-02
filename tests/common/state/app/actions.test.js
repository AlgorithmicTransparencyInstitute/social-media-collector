import actions from 'common/state/app/actions';

import makeActionTester from '../makeActionTester';

const testActions = makeActionTester(actions);

testActions({
  APP_LAUNCH: [[], undefined]
});
