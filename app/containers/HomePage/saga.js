import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_DISHES } from 'containers/App/constants';
import { dishesLoaded, dishesLoadingError } from 'containers/App/actions';

import request from 'utils/request';

export function* getDishes() {
  const requestURL = 'https://api.myjson.com/bins/hlprc';

  try {
    // Call our request helper (see 'utils/request')
    const dishes = yield call(request, requestURL);
    yield put(dishesLoaded(dishes));
  } catch (err) {
    yield put(dishesLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* dishesData() {
  // Watches for LOAD_DISHES actions and calls getDishes when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_DISHES, getDishes);
}
