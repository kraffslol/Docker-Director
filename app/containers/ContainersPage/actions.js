/*
 *
 * ContainersPage actions
 *
 */

import {
  LOAD_CONTAINERS,
  LOAD_CONTAINERS_SUCCESS,
  LOAD_CONTAINERS_ERROR
} from './constants';

export function getContainers() {
  console.log('Setting action');
  return {
    type: LOAD_CONTAINERS
  };
}

export function containersLoaded(containers) {
  return {
    type: LOAD_CONTAINERS_SUCCESS,
    payload: containers
  }
}

export function containersLoadingError(error) {
  return {
    type: LOAD_CONTAINERS_ERROR
  }
}
