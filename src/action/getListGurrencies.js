import {
  GET_LIST_CURRENCIES_REQUEST,
  GET_LIST_CURRENCIES_SUCCESS,
  GET_LIST_CURRENCIES_FAIL,
  URL,
} from '../constants/index';

import { createList } from '../utils/createListExchRates';


function getListCurrencies() {
  return (dispatch) => {
    dispatch({
      type: GET_LIST_CURRENCIES_REQUEST,
    });
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return (response.json());
        } throw new Error('Network response was not ok.');
      })
      .then((response) => {
        const valutes = createList(response.Valute);
        dispatch({
          type: GET_LIST_CURRENCIES_SUCCESS,
          payload: valutes,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_LIST_CURRENCIES_FAIL,
          error: true,
          payload: error.message,
        });
      });
  };
}
export default getListCurrencies;
