import React from 'react';
import {connect} from 'react-redux';
import Converter from '../components/Converter';
import {
  addConverter,
  deleteConverter, 
  editCurrencyFrom,
  editCurrencyTo,
  editConvertFrom
}  from '../action/convertersAction';

class ConverterContainer extends React.Component {
    
    render() {
        const {valute} = this.props;
      return (      
        <Converter
        valute = {valute}
        converters = {this.props.converters}
         editCurrencyTo = {this.props.editCurrencyTo}
         editCurrencyFrom = {this.props.editCurrencyFrom}
         addConverter = {this.props.addConverter}
         deleteConverter = {this.props.deleteConverter}
         editConvertFrom = {this.props.editConvertFrom}
        
         />
      );
    }
  }

  const mapStateToProps = store => {
   
    return {

      converters : store.listConverters,
    };
  };
  
  const mapDispatchToProps = dispatch => ({
    addConverter: (addedConverter) => dispatch(addConverter(addedConverter)),
    deleteConverter: (deletedConverter) => dispatch(deleteConverter(deletedConverter)),
    editCurrencyTo: (id, currencyTo) => dispatch(editCurrencyTo(id, currencyTo) ),
    editCurrencyFrom: (id, currencyFrom) => dispatch(editCurrencyFrom(id, currencyFrom) ),
    editConvertFrom: (id, convertFrom) => dispatch(editConvertFrom(id, convertFrom)),
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ConverterContainer);