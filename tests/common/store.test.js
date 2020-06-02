import * as rtk from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import navigation from 'common/state/navigation/reducer';

import consent from 'common/state/consent/reducer';
import consentChangeListener from 'common/state/consent/changeListener';

import preference from 'common/state/preference/reducer';
import preferenceChangeListener from 'common/state/preference/changeListener';

import permission from 'common/state/permission/reducer';
import permissionChangeListener from 'common/state/permission/changeListener';

import archive from 'common/state/archive/reducer';
import archiveChangeListener from 'common/state/archive/changeListener';

import _store from 'common/store';

jest.mock('@reduxjs/toolkit');
jest.mock('redux-saga');
jest.mock('redux-saga/effects');
jest.mock('common/state/navigation/reducer');
jest.mock('common/state/consent/reducer');
jest.mock('common/state/consent/saga');
jest.mock('common/state/consent/changeListener');
jest.mock('common/state/preference/reducer');
jest.mock('common/state/preference/saga');
jest.mock('common/state/preference/changeListener');
jest.mock('common/state/permission/reducer');
jest.mock('common/state/permission/saga');
jest.mock('common/state/permission/changeListener');
jest.mock('common/state/archive/reducer');
jest.mock('common/state/archive/saga');
jest.mock('common/state/archive/changeListener');

it('called createSagaMiddleware', () => {
  expect(createSagaMiddleware).toHaveBeenCalled();
});

it('called combineReducers', () => {
  expect(rtk.combineReducers).toHaveBeenCalledWith({
    navigation,
    consent,
    preference,
    permission,
    archive
  });
});

it('called getDefaultMiddleware with { thunk: false }', () => {
  expect(rtk.getDefaultMiddleware).toHaveBeenCalledWith({ thunk: false });
});

it('called configureStore', () => {
  expect(rtk.configureStore).toHaveBeenCalled();
});

[
  consentChangeListener,
  preferenceChangeListener,
  permissionChangeListener,
  archiveChangeListener
].forEach(listener => {
  it('called the listener', () => {
    expect(listener).toHaveBeenCalled();
  });
});
