import {converter} from '../utils/converter';
import {RUB} from '../constants/index';

import {
  CHANGE_CURRENCY_FROM,
CHANGE_CURRENCY_TO,
CHANGE_CONVERT_FROM,
} from '../constants/index';

const initialState = {
    currencyFrom: RUB,
    currencyTo: RUB,
    convertFrom: 1,
    convertTo: 1,
  };

  export function convertReducer(state = initialState, action) {
    let newState = {};
    switch (action.type) {
      case CHANGE_CURRENCY_FROM:{
        newState = {...state, currencyFrom: action.payload };
      break;}
      case CHANGE_CURRENCY_TO:{
        console.log('CurrencyTo', action.payload);
        newState = {...state, currencyTo: action.payload};
      break;}
      case CHANGE_CONVERT_FROM:{
        newState =  {...state, convertFrom: action.payload};
      break;}
      default:
        return state;
    }
    console.log('newState', newState);
    
    let _convertTo = converter(newState.currencyFrom, newState.currencyTo, newState.convertFrom);
    console.log('convertTo', _convertTo);
    return {...newState, convertTo: _convertTo };

  }