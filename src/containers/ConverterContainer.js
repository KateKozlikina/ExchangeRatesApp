import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Converter from '../components/Converter';
import {
  deleteConverter,
  editCurrencyFrom,
  editCurrencyTo,
  editConvertFrom,
} from '../action/convertersAction';

const ConverterContainer = (props) => {
  const {
    valute, converters, editCurrencyToAction, editCurrencyFromAction,
    deleteConverterAction, editConvertFromAction,
  } = props;
  return (
    <Converter
      valute={valute}
      converters={converters}
      editCurrencyTo={editCurrencyToAction}
      editCurrencyFrom={editCurrencyFromAction}
      deleteConverter={deleteConverterAction}
      editConvertFrom={editConvertFromAction}
    />
  );
};

const mapStateToProps = store => ({
  converters: store.listConverters,
});

const mapDispatchToProps = dispatch => ({
  deleteConverterAction: deletedConverter => dispatch(deleteConverter(deletedConverter)),
  editCurrencyToAction: (id, currencyTo) => dispatch(editCurrencyTo(id, currencyTo)),
  editCurrencyFromAction: (id, currencyFrom) => dispatch(editCurrencyFrom(id, currencyFrom)),
  editConvertFromAction: (id, convertFrom) => dispatch(editConvertFrom(id, convertFrom)),
});

ConverterContainer.propTypes = {
  deleteConverterAction: PropTypes.func.isRequired,
  editCurrencyToAction: PropTypes.func.isRequired,
  editCurrencyFromAction: PropTypes.func.isRequired,
  editConvertFromAction: PropTypes.func.isRequired,
  converters: PropTypes.array,
  valute: PropTypes.array,
};

ConverterContainer.defaultProps = {
  converters: [],
  valute: [],
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConverterContainer);
