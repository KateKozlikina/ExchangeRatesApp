export function converter( currencyFrom, currencyTo, convertFrom =1){

console.log(convertFrom, currencyFrom.value, currencyFrom.nominal, currencyTo.value, currencyTo.nominal );
    let result = convertFrom * currencyFrom.value / currencyFrom.nominal / currencyTo.value * currencyTo.nominal;
    return result;
}