import {ADD_CONVERTER,
    DELETE_CONVERTER,
    EDIT_CURRENCY_FROM,
    EDIT_CURRENCY_TO,
    EDIT_CONVERT_FROM,} from '../constants/index';

    export function addConverter(addedConverter) {
        console.log('currencyFrom', addedConverter);
        return {
            type: ADD_CONVERTER,
            payload: addedConverter,
        };
    } 
    
    
    export function deleteConverter(idDeletedConverter) {
        console.log('currencyFrom', idDeletedConverter);
        return {
            type: DELETE_CONVERTER,
            payload: idDeletedConverter,
        };
    }  

    export function editCurrencyFrom(id, currencyFrom) {
        console.log('currencyFrom', currencyFrom);
        return {
            type: EDIT_CURRENCY_FROM,
            payload: {
                id: id,
                currencyFrom: currencyFrom,
            }
        };
    } 
    
    export function editCurrencyTo(id, currencyTo) {
        console.log('currencyFrom', currencyTo);
        return {
            type: EDIT_CURRENCY_TO,
            payload: {
                id: id,
                currencyTo: currencyTo,
            }
        };
    }  

    export function editConvertFrom(id, convertFrom) {
        console.log('currencyFrom', convertFrom);
        return {
            type: EDIT_CONVERT_FROM,
            payload: {
                id: id,
                convertFrom: convertFrom,
            }
        };
    } 

    