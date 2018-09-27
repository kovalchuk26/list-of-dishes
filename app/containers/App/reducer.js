import { fromJS } from 'immutable';

import {
  LOAD_DISHES_ERROR,
  LOAD_DISHES_SUCCESS,
  LOAD_DISHES,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  dishes: [],
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DISHES:
      return state
        .set('loading', true)
        .set('error', false)
        .set('dishes', []);
    case LOAD_DISHES_SUCCESS:
      return state.set('dishes', action.dishes.meal).set('loading', false);
    case LOAD_DISHES_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
