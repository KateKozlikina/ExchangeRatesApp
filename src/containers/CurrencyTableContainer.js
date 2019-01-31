import React from 'react';

import {getExangeRates} from '../action/exchangeRatesAction';
import {connect} from 'react-redux';
import CurrencyTable from '../components/CurrencyTable';
import Converter from '../components/Converter';


class CurrencyTableContainer extends React.Component {
    render() {
      console.log(getExangeRates); 
      const { valutes, isFetching, error} = this.props.exchangeRates;
      console.log(this.props.getExangeRatesAction);
      console.log(this.props.exchangeRates, valutes, isFetching, error);
      return (
        <div>
        <Converter valute = {valutes}/>
        <CurrencyTable 
        valute = {valutes} 
        getExangeRates = {this.props.getExangeRatesAction}
        isFetching = {isFetching}
        error = {error}
        />
        </div>
      );
    }
  }



  const mapStateToProps = store => {
    
    return {
      exchangeRates: store.exchangeRatesReducer,
    };
  };
  
  const mapDispatchToProps = dispatch => ({
    getExangeRatesAction: () => dispatch(getExangeRates())
  });


  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CurrencyTableContainer);