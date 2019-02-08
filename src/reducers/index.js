import { combineReducers } from 'redux';
import listCurrencies from './listCurrencies';
import listConverters from './listConverters';

const rootReducer = combineReducers({
  listCurrencies,
  listConverters,
});

export default rootReducer;
