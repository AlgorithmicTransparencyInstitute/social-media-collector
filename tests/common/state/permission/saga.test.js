/* eslint-disable jest/no-test-callback */
import sagaHelper from 'redux-saga-testing';
import { call, put } from 'redux-saga/effects';
import actions from 'common/state/permission/actions';
import * as permission from 'common/storage/permission';

import { load, save } from 'common/state/permission/saga';

jest.mock('common/storage/permission');

const key = 'key';
const value = 'value';

describe('load', () => {
  const defaultValue = true;

  describe('when it works', () => {
    const it = sagaHelper(load({ payload: { key, defaultValue } }));

    it('gets the permission', result => {
      expect(result).toEqual(call(permission.checkPermission, key, defaultValue));
      return defaultValue;
    });

    it('dispatches success', result => {
      expect(result).toEqual(put(actions.loadPermissionSuccess(key, defaultValue)));
    });
  });

  describe('when it fails', () => {
    const it = sagaHelper(load({ payload: { key, defaultValue } }));
    const error = new Error('oops');

    it('gets the permission', result => {
      expect(result).toEqual(call(permission.checkPermission, key, defaultValue));
      return error;
    });

    it('dispatches fail', result => {
      expect(result).toEqual(put(actions.loadPermissionFailed(key, error)));
    });
  });
});

describe('save', () => {
  describe('when it works', () => {
    const it = sagaHelper(save({ payload: { key, value } }));

    it('saves the permission', result => {
      expect(result).toEqual(call(permission.savePermission, key, value));
    });

    it('dispatches success', result => {
      expect(result).toEqual(put(actions.savePermissionSuccess(key, value)));
    });
  });

  describe('when it fails', () => {
    const it = sagaHelper(save({ payload: { key, value } }));
    const error = new Error('oops');

    it('saves the permission', result => {
      expect(result).toEqual(call(permission.savePermission, key, value));
      return error;
    });

    it('dispatches fail', result => {
      expect(result).toEqual(put(actions.savePermissionFailed(key, error)));
    });
  });
});
