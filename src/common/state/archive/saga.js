import { all, call, put, takeEvery } from 'redux-saga/effects';
import { loadArchive, saveArchive } from 'common/storage/archive';
import actions from './actions';

export function* load() {
  try {
    const archive = yield call(loadArchive);
    yield put(actions.loadArchiveSuccess(archive));
  } catch (err) {
    yield put(actions.loadArchiveFailed(err));
  }
}

export function* save({ payload: { archive } }) {
  try {
    yield call(saveArchive, archive);
    yield put(actions.saveArchiveSuccess());
  } catch (err) {
    yield put(actions.saveArchiveFailed(err));
  }
}

/* istanbul ignore next - see https://github.com/antoinejaussoin/redux-saga-testing#how-can-i-test-a-saga-that-uses-take-or-takeevery */
function* saga() {
  yield all([takeEvery('LOAD_ARCHIVE', load), takeEvery('SAVE_ARCHIVE', save)]);
}

export default saga;
