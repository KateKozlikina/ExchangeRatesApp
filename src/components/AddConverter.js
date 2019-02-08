import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import { RUB } from '../constants/index';


const styles = () => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
});


class AddConverter extends React.Component {
  getID() {
    return (new Date()).getTime();
  }

  addClick = () => {
    const { addConverter } = this.props;
    addConverter({ id: this.getID(), currencyFrom: RUB, currencyTo: RUB });
  }

  render() {
    const { classes } = this.props;
    return (
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Fab
            color="secondary"
            aria-label="Add"
            className={classes.fabButton}
            onClick={this.addClick}
          >
            <AddIcon />
          </Fab>
        </Toolbar>
      </AppBar>
    );
  }
}

AddConverter.propTypes = {
  addConverter: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(AddConverter);
