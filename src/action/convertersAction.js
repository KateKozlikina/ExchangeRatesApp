import {
  ADD_CONVERTER,
  DELETE_CONVERTER,
  EDIT_CURRENCY_FROM,
  EDIT_CURRENCY_TO,
  EDIT_CONVERT_FROM,
} from '../constants/index';

export function addConverter(addedConverter) {
  return {
    type: ADD_CONVERTER,
    payload: addedConverter,
  };
}


export function deleteConverter(idDeletedConverter) {
  return {
    type: DELETE_CONVERTER,
    payload: idDeletedConverter,
  };
}

export function editCurrencyFrom(id, currencyFrom) {
  return {
    type: EDIT_CURRENCY_FROM,
    payload: {
      id,
      currencyFrom,
    },
  };
}

export function editCurrencyTo(id, currencyTo) {
  return {
    type: EDIT_CURRENCY_TO,
    payload: {
      id,
      currencyTo,
    },
  };
}

export function editConvertFrom(id, convertFrom) {
  return {
    type: EDIT_CONVERT_FROM,
    payload: {
      id,
      convertFrom,
    },
  };
}
