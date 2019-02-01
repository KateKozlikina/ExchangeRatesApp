import React, { Component } from 'react';
import './App.css';
import CurrencyTable from './components/CurrencyTable';
import ConverterContainer from './containers/ConverterContainer';
import AppBar from './components/AppBar';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import CurensiesListContainer from './containers/CurensiesListContainer';

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

    
    return (
      <div >
        <AppBar/>
        <Divider/>
        <CurensiesListContainer />
      </div>
    );
  }
}




export default withStyles(styles)(App);

