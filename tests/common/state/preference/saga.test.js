/* eslint-disable jest/no-test-callback */
import sagaHelper from 'redux-saga-testing';
import { call, put } from 'redux-saga/effects';
import actions from 'common/state/preference/actions';
import * as preference from 'common/storage/preference';

import { load, save } from 'common/state/preference/saga';

jest.mock('common/storage/preference');

const key = 'key';
const value = 'value';

describe('load', () => {
  describe('when it works', () => {
    const it = sagaHelper(load({ payload: { key } }));

    it('gets the preference', result => {
      expect(result).toEqual(call(preference.getPreference, key));
      return value;
    });

    it('dispatches success', result => {
      expect(result).toEqual(put(actions.loadPreferenceSuccess(key, value)));
    });
  });

  describe('when it fails', () => {
    const it = sagaHelper(load({ payload: { key } }));
    const error = new Error('oops');

    it('gets the preference', result => {
      expect(result).toEqual(call(preference.getPreference, key));
      return error;
    });

    it('dispatches fail', result => {
      expect(result).toEqual(put(actions.loadPreferenceFailed(key, error)));
    });
  });
});

describe('save', () => {
  describe('when it works', () => {
    const it = sagaHelper(save({ payload: { key, value } }));

    it('saves the preference', result => {
      expect(result).toEqual(call(preference.savePreference, key, value));
    });

    it('dispatches success', result => {
      expect(result).toEqual(put(actions.savePreferenceSuccess(key, value)));
    });
  });

  describe('when it fails', () => {
    const it = sagaHelper(save({ payload: { key, value } }));
    const error = new Error('oops');

    it('saves the preference', result => {
      expect(result).toEqual(call(preference.savePreference, key, value));
      return error;
    });

    it('dispatches fail', result => {
      expect(result).toEqual(put(actions.savePreferenceFailed(key, error)));
    });
  });
});
