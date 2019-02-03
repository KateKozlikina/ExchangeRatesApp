import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import {RUB} from '../constants/index';
import { Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '90%',
    marginTop: theme.spacing.unit * 3,
    marginLeft: '5%',
  },
  container1: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '45%',
    marginTop: theme.spacing.unit * 3,
    marginLeft: '1%',
  },
  container3: {
    
    width: '10%',
    marginTop: theme.spacing.unit * 3,
    marginLeft: '45%',
  },
  input: {
    
    margin: theme.spacing.unit *2,
  
  },
  itemMenu: {
    margin: theme.spacing.unit,
    width: 100,
  },
  formControl: {
    margin: theme.spacing.unit,
    marginLeft: theme.spacing.unit*2,
    
  },
  fab: {
    margin: theme.spacing.unit,
  },
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
          <div className={classes.container3}>
                  <Fab color="primary" aria-label="Add" 
                    className={classes.fab} 
                    onClick={(e) =>
                    this.addClick(e, this.props.addConverter)}>
                    <AddIcon/>
                </Fab>
          </div>
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
          <Typography variant="h6" color="inherit">
              Кoнвертер валют
          </Typography>
        </Toolbar>    
        <FormControl className={classes.formControl}>
            <InputLabel variant = "standart" >Переводим из валюты...</InputLabel>
            <TextField className={classes.input}
            defaultValue = {pairConvert.convertFrom}
            onChange={(e)=>this.inputChange(e, editConvertFrom, pairConvert.id)}/>
            {this.itemsRender(select, editCurrencyFrom, pairConvert.currencyFrom, pairConvert.id )} 
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel variant = "standart" >.. в</InputLabel>
          <h4>{Math.round(pairConvert.convertTo * 10000) / 10000}</h4>
          {this.itemsRender(select, editCurrencyTo, pairConvert.currencyTo, pairConvert.id)} 
        </FormControl> 
        {this.fabDelete(pairConvert.id)}
        </div>
      );
    }


    itemsRender(currencies=[], onChange, currency, id){
        return(
          <Select 
          value= {currency.id}
          onChange={(e)=> this.handleChange(e, currencies, onChange, id)}>
              {currencies.map(row => (                   
                <MenuItem value={row.id}>{row.name}</MenuItem>                    
            ))}        
          </Select>
        );
    }

    fabDelete(id){
      if (id !== 0 && id !== 1)
      return (
        <Fab color="primary" className={this.props.classes.fab} 
          onClick={(e) =>this.delClick(e, this.props.deleteConverter, id)}>
          <DeleteIcon/>
        </Fab>
      );
      
    }
    addClick(e, func){
      func({id: this.getID(), currencyFrom: RUB, currencyTo: RUB});
      console.log(this.props);


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