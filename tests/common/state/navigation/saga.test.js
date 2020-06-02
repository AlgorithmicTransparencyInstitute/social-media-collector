/* eslint-disable jest/no-test-callback */
import sagaHelper from 'redux-saga-testing';
import { call, put } from 'redux-saga/effects';
import actions from 'common/state/navigation/actions';
import * as navigation from 'common/storage/navigation';
import routeFromLocationHash from 'common/utils/routeFromLocationHash';

import { navigate, init } from 'common/state/navigation/saga';

jest.mock('common/storage/navigation');
jest.mock('common/utils/routeFromLocationHash');

const current = 'some-tab';
const destination = 'some-new-tab';

describe('navigate', () => {
  describe('when it works', () => {
    const it = sagaHelper(navigate({ payload: { destination } }));

    it('saves the destination as current', result => {
      expect(result).toEqual(call(navigation.saveCurrent, destination));
    });

    it('dispatches success', result => {
      expect(result).toEqual(put(actions.navigateSuccess(destination)));
    });
  });

  describe('when it fails', () => {
    const it = sagaHelper(navigate({ payload: { destination } }));
    const error = new Error('oops');

    it('saves the destination as current', result => {
      expect(result).toEqual(call(navigation.saveCurrent, destination));
      return error;
    });

    it('dispatches fail', result => {
      expect(result).toEqual(put(actions.navigateFailed(error)));
    });
  });
});

describe('init', () => {
  describe('when there is a hash in the url', () => {
    const it = sagaHelper(init());
    const hash = 'terms';

    beforeAll(() => {
      routeFromLocationHash.mockReturnValue(hash);
    });

    it('dispatches init', result => {
      expect(result).toEqual(put(actions.init(hash)));
    });
  });

  describe('when there is no hash in the url', () => {
    const it = sagaHelper(init());

    beforeAll(() => {
      routeFromLocationHash.mockReturnValue();
    });

    it('calls loadCurrent', result => {
      expect(result).toEqual(call(navigation.loadCurrent));
      return current;
    });

    it('dispatches init', result => {
      expect(result).toEqual(put(actions.init(current)));
    });
  });
});
