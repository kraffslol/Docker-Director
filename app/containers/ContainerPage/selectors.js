import { createSelector } from 'reselect';

/**
 * Direct selector to the containerPage state domain
 */
const selectContainerPageDomain = () => state => state.get('containerPage');

/**
 * Other specific selectors
 */

const selectContainer = () => createSelector(
  selectContainerPageDomain(),
  (containerState) => containerState.get('container')
);

const selectLoading = () => createSelector(
  selectContainerPageDomain(),
  (containerState) => containerState.get('loading')
);

/**
 * Default selector used by ContainerPage
 */

const selectContainerPage = () => createSelector(
  selectContainerPageDomain(),
  (substate) => substate
);

export default selectContainerPage;
export {
  selectContainerPageDomain,
  selectContainer,
  selectLoading
};
