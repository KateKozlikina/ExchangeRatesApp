export function converter( currencyFrom, currencyTo, convertFrom =1){
    let result = convertFrom * currencyFrom.value / currencyFrom.nominal / currencyTo.value * currencyTo.nominal;
    return result;
}