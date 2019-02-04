import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import {RUB} from '../constants/index';
import { Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import CloseIcon from '@material-ui/icons/Close';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '94%',
    marginTop: theme.spacing.unit * 10,
    marginLeft: '3%',
  },
  container1: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '50%',
    marginTop: theme.spacing.unit * 3,
    minWidth: 250,
  },
  container3: { 
    width: '10%',
    marginTop: theme.spacing.unit * 3,
    marginLeft: '45%',
  },
  input: {    
    margin: theme.spacing.unit *2,  
  },
  inputLabel: {    
    marginLeft: theme.spacing.unit*2, 
    
  },
  select: {    
    margin: theme.spacing.unit *2,  
    width: 200,
  },
  itemMenu: {
    margin: theme.spacing.unit,
    width: 100,
  },
  formControl: {
    margin: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    
  },

  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  }

});

class Converter extends React.Component{


getID(){
  return (new Date()).getTime();
}

  componentWillReceiveProps(nextProps) {
    if(nextProps.valute !== this.props.valute) {
      const select = Array.from(nextProps.valute);
      const EUR = select.filter(a => a.code === 'EUR')[0];
      const USD = select.filter(a => a.code === 'USD')[0];
      console.log(EUR, USD);
       if (EUR ) nextProps.editCurrencyFrom( 0, EUR );
       if (USD ) nextProps.editCurrencyFrom( 1, USD );
    }
  }

    render(){
      const {classes} = this.props;
      return(
        <div className={classes.container}>
            { this.props.converters.map(row => (                   
                <Paper className={classes.container1} >                      
                    {this.panelConverterRender(row)}
                </Paper>                    
              ))} 
      </div>
        );
    }


    panelConverterRender(pairConvert){
      const {classes, valute} = this.props;
      const {   editConvertFrom, editCurrencyFrom, editCurrencyTo} = this.props;
      const select = Array.from(valute);
      select.unshift(RUB);
      return (    
        <div>
          <Toolbar>
          {this.fabDelete(pairConvert.id)}
            <Typography variant="h6" color="inherit">
                Кoнвертер валют
            </Typography>
          </Toolbar>  
          <FormControl className={classes.formControl}>            
              <TextField className={classes.input} type="number"
              defaultValue = {pairConvert.convertFrom}
              onChange={(e)=>this.inputChange(e, editConvertFrom, pairConvert.id)}/>
              <h4 className={classes.input} >{Math.round(pairConvert.convertTo * 10000) / 10000}</h4>  
          </FormControl>
          <FormControl className={classes.formControl}>
            {this.itemsRender(select, editCurrencyFrom, pairConvert.currencyFrom, pairConvert.id )} 
            {this.itemsRender(select, editCurrencyTo, pairConvert.currencyTo, pairConvert.id)} 
          </FormControl> 
        </div>
      );
    }


    itemsRender(currencies=[], onChange, currency, id){
      const {classes} = this.props;
        return(
          <Select 
          value= {currency.id}
          className={classes.select}
          
          onChange={(e)=> this.handleChange(e, currencies, onChange, id)}>
              {currencies.map(row => (                   
                <MenuItem key={row.id} value={row.id}>{row.name}</MenuItem>                    
            ))}        
          </Select>
        );
    }

    fabDelete(id){
      if (id !== 0 && id !== 1)
      return (
        <CloseIcon color="primary" 
          onClick={(e) =>this.delClick(e, this.props.deleteConverter, id)}>   
        </CloseIcon>
      );
      
    }


    delClick(e, func, id){
      func(id);
      console.log(this.props);


    }
    handleChange(event, select, func, id) {
      let s = select.filter(a => a.id === event.target.value)[0];
      func(id, s);
    }  

    inputChange(event, func, id) {
      func(id, event.target.value);
    } 
}

export default withStyles(styles)(Converter);