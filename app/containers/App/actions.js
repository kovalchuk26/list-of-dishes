import {
  LOAD_DISHES,
  LOAD_DISHES_SUCCESS,
  LOAD_DISHES_ERROR,
} from './constants';

/**
 * Load the dishes, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_DISHES
 */
export function loadDishes() {
  return {
    type: LOAD_DISHES,
  };
}

/**
 * Dispatched when the dishes are loaded by the request saga
 *
 * @param  {array} dishes The repository data
 *
 * @return {object}      An action object with a type of LOAD_DISHES_SUCCESS passing the dishes
 */
export function dishesLoaded(dishes) {
  return {
    type: LOAD_DISHES_SUCCESS,
    dishes,
  };
}

/**
 * Dispatched when loading the dishes fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_DISHES_ERROR passing the error
 */
export function dishesLoadingError(error) {
  return {
    type: LOAD_DISHES_ERROR,
    error,
  };
}
