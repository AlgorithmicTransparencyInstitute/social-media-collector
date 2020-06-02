/* eslint-disable jest/no-test-callback */
import sagaHelper from 'redux-saga-testing';
import { put } from 'redux-saga/effects';
import actions from 'common/state/app/actions';

import appLaunch from 'common/state/app/saga';

describe('appLaunch', () => {
  const it = sagaHelper(appLaunch());

  it('dispatches appLaunch', result => {
    expect(result).toEqual(put(actions.appLaunch()));
  });
});
