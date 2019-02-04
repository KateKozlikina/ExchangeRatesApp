import React, { Component } from 'react';
import AppBar from './components/AppBar';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import CurensiesListContainer from './containers/CurensiesListContainer';
import AddConverterContainer from './containers/AddConverterContainer';

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
        <AddConverterContainer />
      </div>
    );
  }
}

export default withStyles(styles)(App);

