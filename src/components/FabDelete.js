import React from 'react';
import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

class FabDelete extends React.Component {
    delClick = () => {
      const { deleteConverter, id } = this.props;
      deleteConverter(id);
    }

    render() {
      const { id } = this.props;
      if (id !== 0 && id !== 1) {
        return (
          <CloseIcon
            color="primary"
            onClick={this.delClick}
          />
        );
      }
      return null;
    }
}
FabDelete.propTypes = {
  // classes: PropTypes.objectOf(PropTypes.object()).isRequired,
  id: PropTypes.number,
  deleteConverter: PropTypes.func.isRequired,

};

FabDelete.defaultProps = {
  id: 0,
};

export default FabDelete;
