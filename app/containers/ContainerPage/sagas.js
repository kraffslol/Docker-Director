import { take, call, put, select } from 'redux-saga/effects';
import { LOAD_CONTAINER } from './constants';
import { containerLoaded, containerLoadingError } from './actions';
import request from 'utils/request';
// All sagas to be loaded
export default [
  getContainer
];

// Individual exports for testing
export function* defaultSaga() {

}

export function* getContainer(action) {
  while (true) {
    const { id } = yield take(LOAD_CONTAINER);
    const container = yield call(request, '/api/container/' + id);
    if (container.err === undefined || container.err === null) {
      yield put(containerLoaded(container.data));
    } else {
      console.log(container.err.response); // eslint-disable-line no-console
      yield put(containerLoadingError(container.err));
    }
  }
}
