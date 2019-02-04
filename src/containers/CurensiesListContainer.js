import React from 'react';
import {connect} from 'react-redux';
import CurrencyTable from '../components/CurrencyTable';
import ConverterContainer from './ConverterContainer';
import {getListCurrencies} from '../action/getListGurrencies';



class CurrensiesListContainer extends React.Component {
    render() {
      const { valutes, isFetching, error} = this.props.listCurrencies;
      return (
        <div>
          <ConverterContainer valute = {valutes}/>
          <CurrencyTable 
            valute = {valutes} 
            getListCurrencies = {this.props.getListCurrencies}
            isFetching = {isFetching}
            error = {error}
          />
        </div>
      );
    }
  }

  const mapStateToProps = store => {
    return {
      listCurrencies: store.listCurrencies,
    };
  };
  
  const mapDispatchToProps = dispatch => ({
    getListCurrencies: () => dispatch(getListCurrencies())
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CurrensiesListContainer);