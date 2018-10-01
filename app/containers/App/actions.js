import * as actionsTypes from './constants';

/**
 * Load the dishes, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_DISHES
 */
export function loadDishes() {
  return {
    type: actionsTypes.LOAD_DISHES,
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
    type: actionsTypes.LOAD_DISHES_SUCCESS,
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
    type: actionsTypes.LOAD_DISHES_ERROR,
    error,
  };
}

export function setCurrentDish(dishId) {
  return {
    type: actionsTypes.SET_CURRENT_DISH,
    dishId,
  };
}

export function editType(dishesType) {
  return {
    type: actionsTypes.EDIT_TYPE,
    dishesType,
  };
}

export function editSubtype(dishesType) {
  return {
    type: actionsTypes.EDIT_SUBTYPE,
    dishesType,
  };
}

export function addSubtype(dishesSubtype) {
  return {
    type: actionsTypes.ADD_SUBTYPE,
    dishesSubtype,
  };
}

export function addDish(dish) {
  return {
    type: actionsTypes.ADD_DISH,
    dish,
  };
}
