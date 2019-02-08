import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CurrencyTable from '../components/CurrencyTable';
import ConverterContainer from './ConverterContainer';
import getListCurrencies from '../action/getListGurrencies';


const CurrensiesListContainer = ({ listCurrencies, getListCurrenciesAction }) => {
  const { valutes, isFetching, error } = listCurrencies;
  return (
    <div>
      <ConverterContainer valute={valutes} />
      <CurrencyTable
        valute={valutes}
        getListCurrencies={getListCurrenciesAction}
        isFetching={isFetching}
        error={error}
      />
    </div>
  );
};

const mapStateToProps = store => ({
  listCurrencies: store.listCurrencies,
});

const mapDispatchToProps = dispatch => ({
  getListCurrenciesAction: () => dispatch(getListCurrencies()),
});

CurrensiesListContainer.propTypes = {
  getListCurrenciesAction: PropTypes.func.isRequired,
  listCurrencies: PropTypes.object.isRequired,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrensiesListContainer);
