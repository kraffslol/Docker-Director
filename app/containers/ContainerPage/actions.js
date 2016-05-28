/*
 *
 * ContainerPage actions
 *
 */

import {
  LOAD_CONTAINER,
  LOAD_CONTAINER_SUCCESS,
  LOAD_CONTAINER_ERROR
} from './constants';

export function getContainer(id) {
  return {
    type: LOAD_CONTAINER,
    id: id
  };
}

export function containerLoaded(container) {
  return {
    type: LOAD_CONTAINER_SUCCESS,
    payload: container
  }
}

export function containerLoadingError(error) {
  return {
    type: LOAD_CONTAINER_ERROR
  }
}
