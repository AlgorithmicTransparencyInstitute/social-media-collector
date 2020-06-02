import actions from 'common/state/archive/actions';

import makeActionTester from '../makeActionTester';

const archive = ['some', 'archived', 'items'];
const error = new Error('oops');

const testActions = makeActionTester(actions);

testActions({
  LOAD_ARCHIVE: [[], undefined],
  LOAD_ARCHIVE_SUCCESS: [[archive], { archive }],
  LOAD_ARCHIVE_FAILED: [[error], error],
  SAVE_ARCHIVE: [[archive], { archive }],
  SAVE_ARCHIVE_SUCCESS: [[], undefined],
  SAVE_ARCHIVE_FAILED: [[error], error],
  ARCHIVE_CHANGED: [[archive], { archive }]
});
