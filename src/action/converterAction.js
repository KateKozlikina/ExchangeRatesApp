import {GET_CONVERTER} from '../constants/index';


export function getConverter( currencyFrom, currencyTo, value){
    let result = converter(currencyFrom, currencyTo, value);
    return dispatch => {
        dispatch({
            type : GET_CONVERTER,
            payload: result,
        });
}
}


function converter( currencyFrom, currencyTo, value =1){

    let result = value * currencyFrom.value / currencyFrom.nominal / currencyTo.value * currencyTo.nominal;
    return result;
}



