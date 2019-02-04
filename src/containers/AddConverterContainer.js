import React from 'react';
import {connect} from 'react-redux';
import {addConverter}  from '../action/convertersAction';
import AddConverter from '../components/AddConverter';

class AddConverterContainer extends React.Component {
    
    render() {
      return (      
        <AddConverter
         addConverter = {this.props.addConverter}
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
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddConverterContainer);