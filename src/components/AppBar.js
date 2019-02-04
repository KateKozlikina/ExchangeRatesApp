import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
    position: 'fixed',
    width:'100%',
    zIndex: 1,
  },
  typography: {
    marginLeft: '3%',
    minWidth: 400, 
  }
};

function SimpleAppBar(props) {
  const { classes, } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar>
          <Typography className={classes.typography} variant="h6" color="inherit">
            Курс валют ЦБР на сегодня {new Date().toLocaleDateString()}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);