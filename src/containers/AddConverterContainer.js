import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addConverter } from '../action/convertersAction';
import AddConverter from '../components/AddConverter';


const AddConverterContainer = (props) => {
  const { addConverterAction } = props;
  return (
    <AddConverter
      addConverter={addConverterAction}
    />
  );
};

const mapStateToProps = store => ({
  converters: store.listConverters,
});

const mapDispatchToProps = dispatch => ({
  addConverterAction: addedConverter => dispatch(addConverter(addedConverter)),
});

AddConverterContainer.propTypes = {
  addConverterAction: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddConverterContainer);
