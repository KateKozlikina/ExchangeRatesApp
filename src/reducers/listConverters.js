import {
  ADD_CONVERTER,
  DELETE_CONVERTER,
  EDIT_CURRENCY_FROM,
  EDIT_CURRENCY_TO,
  EDIT_CONVERT_FROM, RUB,
} from '../constants/index';
import { converter } from '../utils/converter';


const initialState = [{
  id: 0,
  currencyFrom: RUB,
  currencyTo: RUB,
  convertFrom: 1,
  convertTo: 1,
},
{
  id: 1,
  currencyFrom: RUB,
  currencyTo: RUB,
  convertFrom: 1,
  convertTo: 1,
}];


function listConverters(state = initialState, action) {
  switch (action.type) {
    case ADD_CONVERTER: {
      return [
        ...state, {
          id: action.payload.id,
          currencyFrom: action.payload.currencyFrom,
          currencyTo: action.payload.currencyTo,
          convertFrom: 1,
          convertTo: converter(action.payload.currencyFrom,
            action.payload.currencyTo, state.convertFrom),
        },
      ];
    }
    case DELETE_CONVERTER: {
      const id = action.payload;
      if (id !== 0 && id !== 1) {
        const newState = state.slice();
        return newState.filter(convert => convert.id !== action.payload);
      } return state;
    }
    case EDIT_CURRENCY_FROM: {
      const newState = state.slice();
      const convert = newState.filter(el => el.id === action.payload.id)[0];
      convert.currencyFrom = action.payload.currencyFrom;
      convert.convertTo = converter(convert.currencyFrom, convert.currencyTo, convert.convertFrom);
      newState[convert.id] = convert;
      return newState;
    }
    case EDIT_CURRENCY_TO: {
      const newState = state.slice();
      const convert = newState.filter(el => el.id === action.payload.id)[0];
      convert.currencyTo = action.payload.currencyTo;
      convert.convertTo = converter(convert.currencyFrom, convert.currencyTo, convert.convertFrom);
      newState[convert.id] = convert;
      return newState;
    }
    case EDIT_CONVERT_FROM: {
      const newState = state.slice();
      const convert = newState.filter(el => el.id === action.payload.id)[0];
      convert.convertFrom = action.payload.convertFrom;
      convert.convertTo = converter(convert.currencyFrom, convert.currencyTo, convert.convertFrom);
      newState[convert.id] = convert;
      return newState;
    }
    default:
      return state;
  }
}

export default listConverters;
