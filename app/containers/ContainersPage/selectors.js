import { createSelector } from 'reselect';

/**
 * Direct selector to the containersPage state domain
 */
const selectContainersPageDomain = () => state => state.get('containersPage');

/**
 * Other specific selectors
 */

const selectContainers = () => createSelector(
  selectContainersPageDomain(),
  (containersState) => containersState.get('containers')
);

const selectLoading = () => createSelector(
  selectContainersPageDomain(),
  (containersState) => containersState.get('loading')
);

/**
 * Default selector used by ContainersPage
 */

const selectContainersPage = () => createSelector(
  selectContainersPageDomain(),
  (substate) => substate
);

export default selectContainersPage;
export {
  selectContainersPageDomain,
  selectContainers,
  selectLoading
};
