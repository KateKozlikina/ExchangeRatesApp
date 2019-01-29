import {
    GET_EXCHANGE_RATES_REQUEST,
    GET_EXCHANGE_RATES_SUCCESS,
    GET_EXCHANGE_RATES_FAIL
} from '../constants/index';

import {ACCESS_KEY, SOURCE} from '../constants/index';
import {createList} from '../utils/createListExchRates';


let cashed = false;

export function getExangeRates(){
    return dispatch => {
        dispatch({
            type : GET_EXCHANGE_RATES_REQUEST,
        })

        fetch(`http://www.apilayer.net/api/live?access_key=${ACCESS_KEY}&source=${SOURCE}`)
        .then(response => response.json())
    .then(response => {
        if (response.success){


            console.log('actionquotes', response.quotes);
            let quotes = createList( response.quotes);
            dispatch({
                type: GET_EXCHANGE_RATES_SUCCESS,
                payload: quotes,
            });

        }else{
            let error = `${response.error.code}: ${response.error.info}`;
            dispatch({
                type: GET_EXCHANGE_RATES_FAIL,
                error: true,
                payload: error,
              });

        }
    }
   )
    .catch(reason => {
        dispatch({
          type: GET_EXCHANGE_RATES_FAIL,
          error: true,
          payload: reason.message,
        });
      }
        );
    }
}