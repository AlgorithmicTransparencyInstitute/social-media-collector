import { all, call, put, takeEvery } from 'redux-saga/effects';
import { getPreference, savePreference } from 'common/storage/preference';
import actions from './actions';

export function* load({ payload: { key } }) {
  try {
    const value = yield call(getPreference, key);
    yield put(actions.loadPreferenceSuccess(key, value));
  } catch (err) {
    yield put(actions.loadPreferenceFailed(key, err));
  }
}

export function* save({ payload: { key, value } }) {
  try {
    yield call(savePreference, key, value);
    yield put(actions.savePreferenceSuccess(key, value));
  } catch (err) {
    yield put(actions.savePreferenceFailed(key, err));
  }
}

/* istanbul ignore next - see https://github.com/antoinejaussoin/redux-saga-testing#how-can-i-test-a-saga-that-uses-take-or-takeevery */
function* saga() {
  yield all([takeEvery('LOAD_PREFERENCE', load), takeEvery('SAVE_PREFERENCE', save)]);
}

export default saga;
