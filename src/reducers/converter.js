import {GET_CONVERTER} from '../constants/index';

const initialState = {
    currencyFrom: {},
    currencyTo: {},
    convert: 1,
  };

  export function exchangeRatesReducer(state = initialState, action) {
    switch (action.type) {
      case GET_CONVERTER:
      return {...action.payload}
    //   case GET_EXCHANGE_RATES_SUCCESS:
    //     return { ...state, valutes: action.payload, isFetching: false };
    //   case GET_EXCHANGE_RATES_FAIL:
    //     return { ...state, isFetching: false, error: action.payload };
      default:
        return state;
    }
  }