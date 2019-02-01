import {combineReducers} from 'redux';
import  {exchangeRatesReducer} from './exchangeRates';
import {convertReducer} from './converter';
import {listConverters} from './addDeleteConverter';


export const rootReducer = combineReducers({
  exchangeRatesReducer,  
  convertReducer,
  listConverters,
});