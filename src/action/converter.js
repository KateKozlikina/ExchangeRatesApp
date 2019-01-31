import {
    CHANGE_CURRENCY_FROM,
CHANGE_CURRENCY_TO,
CHANGE_CONVERT_FROM,
} from '../constants/index';


export function changeCurrencyFrom(currencyFrom) {
    console.log('currencyFrom', currencyFrom);
    return {
        type: CHANGE_CURRENCY_FROM,
        payload: currencyFrom,
    };
}

export function changeCurrencyTo(currencyTo) {
    console.log('currencyTo', currencyTo);
    return {
        type: CHANGE_CURRENCY_TO,
        payload: currencyTo,
    };
}

export function changeConvertFrom(convertFrom) {
    console.log('convertFrom', convertFrom);
    return {
        type: CHANGE_CONVERT_FROM,
        payload: convertFrom,
    };
}