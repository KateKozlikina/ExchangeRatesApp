import React from 'react';
import {
  changeCurrencyFrom,
  changeCurrencyTo,
  changeConvertFrom,
} from '../action/converter';
import {connect} from 'react-redux';
import Converter from '../components/Converter';
import {getExangeRates} from '../action/exchangeRatesAction';
import {addConverter, deleteConverter, editCurrencyFrom, editCurrencyTo, editConvertFrom} from '../action/addDeleteConvert';

class ConverterContainer extends React.Component {
    
    render() {
        const {pairConvert, valute} = this.props;
        
        const select = Array.from(valute);
        console.log('valute', this.props.converters);
        //this.props.changeCurrencyTo(select.filter(a => a.code === 'USD')[0]);
      return (      
        <Converter
        valute = {valute}
        isFetching = {this.props.isFetching}
         pairConvert = {pairConvert}
         editCurrencyTo = {this.props.editCurrencyTo}
         editCurrencyFrom = {this.props.editCurrencyFrom}
         changeCurrencyFrom ={this.props.changeCurrencyFrom}
         changeCurrencyTo ={this.props.changeCurrencyTo}
         changeConvertFrom ={this.props.changeConvertFrom}
         addConverter = {this.props.addConverter}
         deleteConverter = {this.props.deleteConverter}
         converters = {this.props.converters}
         editConvertFrom = {this.props.editConvertFrom}
        
         />
      );
    }
  }

  const mapStateToProps = store => {
   
    return {
      pairConvert: store.convertReducer,
      converters : store.listConverters,
    };
  };
  
  const mapDispatchToProps = dispatch => ({
    addConverter: (addedConverter) => dispatch(addConverter(addedConverter)),
    deleteConverter: (deletedConverter) => dispatch(deleteConverter(deletedConverter)),
    editCurrencyTo: (id, currencyTo) => dispatch(editCurrencyTo(id, currencyTo) ),
    editCurrencyFrom: (id, currencyFrom) => dispatch(editCurrencyFrom(id, currencyFrom) ),
    editConvertFrom: (id, convertFrom) => dispatch(editConvertFrom(id, convertFrom)),
    changeCurrencyFrom: (currencyFrom, ) => dispatch(changeCurrencyFrom(currencyFrom)),
    changeCurrencyTo: (currencyTo ) => dispatch(changeCurrencyTo(currencyTo)),
    changeConvertFrom: (convertTo ) => dispatch(changeConvertFrom(convertTo)),
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ConverterContainer);