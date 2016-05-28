import { take, call, put, select } from 'redux-saga/effects';
import { LOAD_CONTAINERS } from './constants';
import { containersLoaded, containersLoadingError } from './actions';
import request from 'utils/request';
// All sagas to be loaded
export default [
  getContainers
];

// Individual exports for testing
export function* defaultSaga() {

}

export function* getContainers() {
  while (true) {
    yield take(LOAD_CONTAINERS);
    const containers = yield call(request, '/api/containers');
    
    if (containers.err === undefined || containers.err === null) {
      yield put(containersLoaded(containers.data));
    } else {
      console.log(containers.err.response); // eslint-disable-line no-console
      yield put(containersLoadingError(containers.err));
    }
  }
}
