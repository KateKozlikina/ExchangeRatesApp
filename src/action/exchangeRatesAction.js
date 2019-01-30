import {
    GET_EXCHANGE_RATES_REQUEST,
    GET_EXCHANGE_RATES_SUCCESS,
    GET_EXCHANGE_RATES_FAIL
} from '../constants/index';

import {ACCESS_KEY, SOURCE} from '../constants/index';
import {createList} from '../utils/createListExchRates';
import {URL} from '../constants/index';


let cashed = false;

export function getExangeRates(){
    return dispatch => {
        dispatch({
            type : GET_EXCHANGE_RATES_REQUEST,
        })
        //fetch(`http://www.apilayer.net/api/live?access_key=${ACCESS_KEY}&source=${SOURCE}`)
        fetch(URL)
        .then(response => 
            {
                console.log('response', response);
                if(response.ok)
                 return( response.json());
                else
                throw new Error('Network response was not ok.');
            })
        .then(response => {
                console.log('actionquotes', response.Valute);
                let valutes = createList( response.Valute);
                dispatch({
                    type: GET_EXCHANGE_RATES_SUCCESS,
                    payload: valutes,
                });
            })
        .catch(error => {
            dispatch({
            type: GET_EXCHANGE_RATES_FAIL,
            error: true,
            payload: error.message,
            });
        });
    }
}