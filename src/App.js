import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {getExangeRates} from './action/exchangeRatesAction';
import {connect} from 'react-redux';
import CurrencyTable from './components/CurrencyTable';
import ConverterContainer from './containers/ConverterContainer';
import AppBar from './components/AppBar';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing.unit,
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`,
  },
});
class App extends Component {


  

  render() {
    const { valutes, isFetching, error, classes} = this.props.exchangeRates;
    
    return (
      <div className="App">
        <AppBar/>
        <Grid container spacing={12}>
          <Grid item xs={3}>
          <ConverterContainer valute = {valutes}
        isFetching = {isFetching}/>
          </Grid>
          <Grid item xs={9}>
          <CurrencyTable 
        valute = {valutes} 
        getExangeRates = {this.props.getExangeRatesAction}
        isFetching = {isFetching}
        error = {error}
        />
          </Grid>
        </Grid>
        {/* <ConverterContainer valute = {valutes}
        isFetching = {isFetching}/>
        <CurrencyTable 
        valute = {valutes} 
        getExangeRates = {this.props.getExangeRatesAction}
        isFetching = {isFetching}
        error = {error}
        /> */}
        
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



export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));

