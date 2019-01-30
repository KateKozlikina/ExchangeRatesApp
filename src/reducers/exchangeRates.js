import {
    GET_EXCHANGE_RATES_REQUEST,
    GET_EXCHANGE_RATES_SUCCESS,
    GET_EXCHANGE_RATES_FAIL
} from '../constants/index';

const initialState = {
    valutes: {},
    isFetching: false,
    error: ""
  };

  export function exchangeRatesReducer(state = initialState, action) {
    switch (action.type) {
      case GET_EXCHANGE_RATES_REQUEST:
        return { ...state,  isFetching: true };
      case GET_EXCHANGE_RATES_SUCCESS:
        return { ...state, valutes: action.payload, isFetching: false };
      case GET_EXCHANGE_RATES_FAIL:
        return { ...state, isFetching: false, error: action.payload };
      default:
        return state;
    }
  }