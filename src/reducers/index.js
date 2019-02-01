import {combineReducers} from 'redux';
import  {listCurrencies} from './listCurrencies';
import {listConverters} from './listConverters';

export const rootReducer = combineReducers({
  listCurrencies, 
  listConverters,
});