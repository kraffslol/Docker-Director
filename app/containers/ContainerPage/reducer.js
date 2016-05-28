/*
 *
 * ContainersPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_CONTAINER,
  LOAD_CONTAINER_ERROR,
  LOAD_CONTAINER_SUCCESS
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  container: false
});

function containerPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CONTAINER:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_CONTAINER_SUCCESS:
        return state
          .set('loading', false)
          .set('error', false)
          .setIn(['container'], action.payload.container);
    case LOAD_CONTAINER_ERROR:
        return state
          .set('loading', false)
          .set('error', true);
    default:
      return state;
  }
}

export default containerPageReducer;
