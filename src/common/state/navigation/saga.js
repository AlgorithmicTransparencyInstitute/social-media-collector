import { all, call, put, takeEvery } from 'redux-saga/effects';
import { loadCurrent, saveCurrent } from 'common/storage/navigation';
import routeFromLocationHash from 'common/utils/routeFromLocationHash';

import actions from './actions';

export function* navigate({ payload: { destination } }) {
  try {
    yield call(saveCurrent, destination);
    yield put(actions.navigateSuccess(destination));
  } catch (err) {
    yield put(actions.navigateFailed(err));
  }
}

export function* init() {
  const hash = routeFromLocationHash();
  if (hash) {
    yield put(actions.init(hash));
  } else {
    const current = yield call(loadCurrent);
    yield put(actions.init(current));
  }
}

/* istanbul ignore next - see https://github.com/antoinejaussoin/redux-saga-testing#how-can-i-test-a-saga-that-uses-take-or-takeevery */
function* saga() {
  yield all([takeEvery('NAVIGATE', navigate), takeEvery('APP_LAUNCH', init)]);
}

export default saga;
