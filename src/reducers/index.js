import {combineReducers} from 'redux';
import  {exchangeRatesReducer} from './exchangeRates';
import {convertReducer} from './converter';


export const rootReducer = combineReducers({
  exchangeRatesReducer,  
  convertReducer,
});