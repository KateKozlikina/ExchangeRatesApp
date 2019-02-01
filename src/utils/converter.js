export function converter( currencyFrom, currencyTo, convertFrom =1){
console.log('asdsd', currencyFrom, currencyTo);
console.log('converter', convertFrom, currencyFrom.value, currencyFrom.nominal, currencyTo.value, currencyTo.nominal );
    let result = convertFrom * currencyFrom.value / currencyFrom.nominal / currencyTo.value * currencyTo.nominal;
    return result;
}