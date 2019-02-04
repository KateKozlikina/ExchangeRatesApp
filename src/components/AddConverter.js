import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import {RUB} from '../constants/index';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const styles = theme => ({

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


class AddConverter extends React.Component{
    getID(){
        return (new Date()).getTime();
      }
      
    render(){
        const {classes} = this.props;
        return (
            <AppBar position="fixed" color="primary" className={classes.appBar}>
            <Toolbar className={classes.toolbar}> 
              <Fab color="secondary" aria-label="Add" className={classes.fabButton}
              onClick={(e) =>
                this.addClick(e, this.props.addConverter)}>
                <AddIcon />
              </Fab>
            </Toolbar>
          </AppBar> 
        );
    }

    addClick(e, func){
        func({id: this.getID(), currencyFrom: RUB, currencyTo: RUB});
        console.log(this.props);
    
    
      }
}



export default withStyles(styles)(AddConverter);