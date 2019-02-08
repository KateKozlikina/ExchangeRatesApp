import {
  GET_LIST_CURRENCIES_REQUEST,
  GET_LIST_CURRENCIES_SUCCESS,
  GET_LIST_CURRENCIES_FAIL,
} from '../constants/index';


const initialState = {
  valutes: {},
  isFetching: false,
  error: '',
};

function listCurrencies(state = initialState, action) {
  switch (action.type) {
    case GET_LIST_CURRENCIES_REQUEST:
      return { ...state, isFetching: true };
    case GET_LIST_CURRENCIES_SUCCESS:
      return { ...state, valutes: action.payload, isFetching: false };
    case GET_LIST_CURRENCIES_FAIL:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
}
export default listCurrencies;
