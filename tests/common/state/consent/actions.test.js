import actions from 'common/state/consent/actions';

import makeActionTester from '../makeActionTester';

const version = 1;
const acceptedAt = new Date().getTime();
const viewedAt = new Date().getTime();
const error = new Error('oops');

const testActions = makeActionTester(actions);

testActions({
  LOAD_CONSENT: [[], undefined],
  LOAD_CONSENT_SUCCESS: [[version, acceptedAt, viewedAt], { version, acceptedAt, viewedAt }],
  LOAD_CONSENT_FAILED: [[error], error],
  SAVE_CONSENT: [[], undefined],
  SAVE_CONSENT_SUCCESS: [[acceptedAt], { acceptedAt }],
  SAVE_CONSENT_FAILED: [[error], error],
  VIEWED_CONSENT: [[], undefined],
  VIEWED_CONSENT_SUCCESS: [[viewedAt], { viewedAt }],
  VIEWED_CONSENT_FAILED: [[error], error],
  CONSENT_CHANGED: [[version, acceptedAt, viewedAt], { version, acceptedAt, viewedAt }]
});
