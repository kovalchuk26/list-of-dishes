/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const selectRoute = state => state.get('route');

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('error'));

const makeSelectDishes = () =>
  createSelector(selectGlobal, globalState => globalState.get('dishes'));

const makeSelectSelectedDish = () =>
  createSelector(selectGlobal, globalState => globalState.get('selectedDish'));

const makeSelectVisibleModal = () =>
  createSelector(selectGlobal, globalState => globalState.get('visibleModal'));

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectDishes,
  makeSelectLocation,
  makeSelectSelectedDish,
  makeSelectVisibleModal,
};
