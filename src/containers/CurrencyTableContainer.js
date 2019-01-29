import React from 'react';

import {getExangeRates} from '../action/exchangeRatesAction';
import {connect} from 'react-redux';
import CurrencyTable from '../components/CurrencyTable';


class CurrencyTableContainer extends React.Component {
    render() {
      console.log(getExangeRates); 
      const { quotes, isFetching, error} = this.props.exchangeRates;
      console.log(this.props.getExangeRatesAction);
      console.log(this.props.exchangeRates, quotes, isFetching, error);
      return (
        <CurrencyTable 
        quotes = {quotes} 
        getExangeRates = {this.props.getExangeRatesAction}
        isFetching = {isFetching}
        error = {error}
        />
      );
    }
  }



  const mapStateToProps = store => {
    console.log('store',store);
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