import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {getExangeRates} from './action/exchangeRatesAction';
import {connect} from 'react-redux';
import CurrencyTable from './components/CurrencyTable';
import ConverterContainer from './containers/ConverterContainer';

import CurrencyTableContainer from './containers/CurrencyTableContainer';

class App extends Component {


  

  render() {
    const { valutes, isFetching, error} = this.props.exchangeRates;
    
    return (
      <div className="App">
        <ConverterContainer valute = {valutes}
        isFetching = {isFetching}/>
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
)(App);

