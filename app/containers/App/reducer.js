import { fromJS } from 'immutable';

import * as actionsTypes from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  dishes: {},
  selectedDish: null,
  editableType: null
});


function appReducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.LOAD_DISHES:
      return state.set('loading', true).set('error', false);
    case actionsTypes.LOAD_DISHES_SUCCESS:
      return state.set('dishes', action.dishes).set('loading', false);
    case actionsTypes.LOAD_DISHES_ERROR:
      return state.set('error', action.error).set('loading', false);
    case actionsTypes.SELECT_DISH:
      return state.set(
        'selectedDish',
        state.get('dishes').dishes.byId[action.dishId]
      );
    default:
      return state;
  }
}

export default appReducer;
