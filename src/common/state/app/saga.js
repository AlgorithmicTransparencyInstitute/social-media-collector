import { put } from 'redux-saga/effects';
import actions from './actions';

export default function* appLaunch() {
  yield put(actions.appLaunch());
}
