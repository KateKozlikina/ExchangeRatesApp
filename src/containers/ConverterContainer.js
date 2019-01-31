import React from 'react';
import {
  changeCurrencyFrom,
  changeCurrencyTo,
  changeConvertFrom,
} from '../action/converter';
import {connect} from 'react-redux';
import Converter from '../components/Converter';
import {getExangeRates} from '../action/exchangeRatesAction';

class CurrencyTableContainer extends React.Component {
    
    render() {
        const {pairConvert, valute} = this.props;
        
        const select = Array.from(valute);
        console.log('valute', valute);
        //this.props.changeCurrencyTo(select.filter(a => a.code === 'USD')[0]);
      return (      
        <Converter
        valute = {valute}
        isFetching = {this.props.isFetching}
         pairConvert = {pairConvert}
         changeCurrencyFrom ={this.props.changeCurrencyFrom}
         changeCurrencyTo ={this.props.changeCurrencyTo}
         changeConvertFrom ={this.props.changeConvertFrom}
        
         />
      );
    }
  }

  const mapStateToProps = store => {
   
    return {
      pairConvert: store.convertReducer,
    };
  };
  
  const mapDispatchToProps = dispatch => ({
    
    changeCurrencyFrom: (currencyFrom, ) => dispatch(changeCurrencyFrom(currencyFrom)),
    changeCurrencyTo: (currencyTo ) => dispatch(changeCurrencyTo(currencyTo)),
    changeConvertFrom: (convertTo ) => dispatch(changeConvertFrom(convertTo)),
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CurrencyTableContainer);