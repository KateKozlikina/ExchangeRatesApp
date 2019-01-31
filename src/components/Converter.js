import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import {RUB} from '../constants/index';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 240,
  },
});

class Converter extends React.Component{

  componentDidMount(){
    const select = Array.from(this.props.valute);
    
    console.log('select', select);
   // this.props.changeCurrencyTo(select.filter(a => a.code === 'USD')[0]);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.valute !== this.props.valute) {
      console.log('select', nextProps);
      const select = Array.from(nextProps.valute);
    console.log('select', select);
    nextProps.changeCurrencyTo(select.filter(a => a.code === 'USD')[0]);
      // nextProps.myProp имеет другое значение, чем наше текущее myProps
      // поэтому мы можем что-нибудь рассчитать базируясь на новом значении.
    }
  }

    render(){
      const {classes, pairConvert, valute} = this.props;
      const {changeCurrencyFrom,changeCurrencyTo, changeConvertFrom} = this.props;
      const select = Array.from(valute);
      select.unshift(RUB);
      if (select.lenght>0)
      changeCurrencyTo(select.filter(a => a.code === 'USD')[0]);
      return(
        <div className={classes.container}>
          <Input 
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
          </FormControl>
        </div>
        );
    }

    itemsRender(currencies=[], onChange, currency){
      const {valute} = this.props;
      return(
      <Select 
      value={currency.id}
      onChange={(e)=> this.handleChange(e, currencies, onChange)}>
          { currencies.map(row => (                   
            <MenuItem value={row.id}>{row.code}</MenuItem>                    
        ))}        
      </Select>)
    }

    handleChange(event, select, func) {
      //const select = Array.from(valute);
      let s = select.filter(a => a.id === event.target.value)[0];
      func(s);
    }  

    inputChange(event, func) {
      func(event.target.value);
    } 
}

export default withStyles(styles)(Converter);