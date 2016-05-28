/*
 *
 * ContainersPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_CONTAINERS,
  LOAD_CONTAINERS_ERROR,
  LOAD_CONTAINERS_SUCCESS
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  containers: false
});

function containersPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CONTAINERS:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_CONTAINERS_SUCCESS:
        return state
          .set('loading', false)
          .set('error', false)
          .setIn(['containers'], action.payload.containers);
    case LOAD_CONTAINERS_ERROR:
        return state
          .set('loading', false)
          .set('error', true);
    default:
      return state;
  }
}

export default containersPageReducer;
