import { all, call, put, takeEvery } from 'redux-saga/effects';
import { checkPermission, savePermission } from 'common/storage/permission';
import actions from './actions';

export function* load({ payload: { key, defaultValue } }) {
  try {
    const value = yield call(checkPermission, key, defaultValue);
    yield put(actions.loadPermissionSuccess(key, value));
  } catch (err) {
    yield put(actions.loadPermissionFailed(key, err));
  }
}

export function* save({ payload: { key, value } }) {
  try {
    yield call(savePermission, key, value);
    yield put(actions.savePermissionSuccess(key, value));
  } catch (err) {
    yield put(actions.savePermissionFailed(key, err));
  }
}

/* istanbul ignore next - see https://github.com/antoinejaussoin/redux-saga-testing#how-can-i-test-a-saga-that-uses-take-or-takeevery */
function* saga() {
  yield all([takeEvery('LOAD_PERMISSION', load), takeEvery('SAVE_PERMISSION', save)]);
}

export default saga;
