import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  select: {
    margin: theme.spacing.unit * 2,
    width: 200,
  },

});
class ItemsRender extends React.Component {
  handleChange = (event) => {
    const { currencies, editCurrency, id } = this.props;
    const s = currencies.filter(a => a.id === event.target.value)[0];
    editCurrency(id, s);
  }

  render() {
    const { classes, currency, currencies } = this.props;
    return (
      <Select
        value={currency.id}
        className={classes.select}
        onChange={this.handleChange}
      >
        {currencies.map(row => (
          <MenuItem key={row.id} value={row.id}>{row.name}</MenuItem>
        ))}
      </Select>
    );
  }
}

ItemsRender.propTypes = {
  classes: PropTypes.object.isRequired,
  editCurrency: PropTypes.func.isRequired,
  currency: PropTypes.object,
  id: PropTypes.number,
  currencies: PropTypes.array,

};

ItemsRender.defaultProps = {
  currency: {},
  currencies: [],
  id: 0,
};
export default withStyles(styles)(ItemsRender);
