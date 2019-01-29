import {combineReducers} from 'redux';
import  {exchangeRatesReducer} from './exchangeRates';


export const rootReducer = combineReducers({
  exchangeRatesReducer,  
});