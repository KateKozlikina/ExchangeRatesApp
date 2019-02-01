import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import {converter} from '../utils/converter';

import {RUB} from '../constants/index';
import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing.unit * 3,
    marginLeft: '10%',
  },
  input: {
    margin: theme.spacing.unit,
    width: 100,
    height: 50,
  },
  itemMenu: {
    margin: theme.spacing.unit,
    width: 100,
    font: "8px",
  },
  formControl: {
    margin: theme.spacing.unit,
    width: 220,
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
      if (EUR) nextProps.editCurrencyFrom( 0, EUR )
      //f (EUR) nextProps.addConverter({id: this.getID(), currencyFrom: EUR, currencyTo: RUB});
      if (USD) nextProps.addConverter({id: 1,currencyFrom: USD, currencyTo: RUB});
      nextProps.changeCurrencyTo(select.filter(a => a.code === 'USD')[0]);
      console.log(nextProps);
      
    }
    // if(nextProps.pairConvert!==this.props.pairConvert){
    //   console.log('11',nextProps);
    //   this.props.addConverter(this.props.pairConvert);
    // }
  }

    render(){
      const {classes, pairConvert, valute} = this.props;
      console.log(this.props);
      const {changeCurrencyFrom,changeCurrencyTo, changeConvertFrom, addConverter} = this.props;
      const select = Array.from(valute);
      select.unshift(RUB);
      console.log('dff', this.props);
      //this.props.addConverter(pairConvert);
      //console.log(this.props);
      //if (select.lenght>0)
     // changeCurrencyTo(select.filter(a => a.code === 'USD')[0]);
      return(
        <Paper className={classes.container}>
          {/* <Input 
            defaultValue = {pairConvert.convertFrom}
            onChange={(e)=>this.inputChange(e, changeConvertFrom)}/>
            <Input 
            defaultValue = {pairConvert.convertTo}
            />
            <p>{pairConvert.convertTo}</p>
          <FormControl className={classes.formControl}>
            <InputLabel >Выберите валюту</InputLabel>
          {this.itemsRender(select, changeCurrencyFrom, pairConvert.currencyFrom )} 
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel >Выберите валюту</InputLabel>
              {this.itemsRender(select, changeCurrencyTo, pairConvert.currencyTo)} 
          </FormControl> */}
          <Fab color="primary" aria-label="Add" 
                  className={classes.fab} 
                  onClick={(e) =>this.addClick(e, this.props.addConverter)}>Добавить</Fab> 
              { this.props.converters.map(row => (                   
           <Paper>    
                               
           {this.panelConverterRender(row) }
           </Paper>                    
        ))} 
          {/* {this.props.converters && this.panelConverterRender(pairConvert)} */}
          {/* { <Fab color="primary" aria-label="Add" className={classes.fab} 
          onClick={(e)=>this.addClick(e, addConverter, pairConvert)}>
        
      </Fab> }
      {this.listConvert()} */}
      
        </Paper>
        );
    }

    listConvert(){
      const {converters} = this.props;
      if (converters && converters.lenght>1)
      { converters.map(row => ( 
        <Paper>     
                       
        this.panelConverterRender(row) 
        </Paper>                  
    ))}  
    }
    panelConverterRender(pairConvert){
      const {classes, valute} = this.props;
      const {changeCurrencyFrom,changeCurrencyTo, deleteConverter, changeConvertFrom,addConverter, editConvertFrom, editCurrencyFrom, editCurrencyTo} = this.props;
      const select = Array.from(valute);
      select.unshift(RUB);
      return (    
        <div>
        <Toolbar>
        <Typography variant="h6" color="inherit">
          Кoнвертер валют
        </Typography>
      </Toolbar>    

          <TextField className={classes.input}
            variant="outlined"
            defaultValue = {pairConvert.convertFrom}
            onChange={(e)=>this.inputChange(e, editConvertFrom, pairConvert.id)}/>

        <FormControl className={classes.formControl}>
            <InputLabel variant = "standart" >Выберите валюту</InputLabel>
          {this.itemsRender(select, editCurrencyFrom, pairConvert.currencyFrom, pairConvert.id )} 
          </FormControl>

        <p>{pairConvert.convertTo}</p>

        <FormControl className={classes.formControl}>
            <InputLabel >Выберите валюту</InputLabel>
              {this.itemsRender(select, editCurrencyTo, pairConvert.currencyTo, pairConvert.id)} 
          </FormControl>
          <Fab color="primary" aria-label="Add" className={classes.fab} onClick={(e) =>this.delClick(e, deleteConverter, pairConvert.id)}>
        Удалить
      </Fab>
        </div>
      );
    }
    itemsRender(currencies=[], onChange, currency, id){
      const {valute} = this.props;
      console.log('id', currency );
      return(
      <Select 
      value= {currency.id}
      onChange={(e)=> this.handleChange(e, currencies, onChange, id)}>
          { currencies.map(row => (                   
            <MenuItem value={row.id}>{row.name}</MenuItem>                    
        ))}        
      </Select>)
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