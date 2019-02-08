import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import PanelConverter from './PanelConverter';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '94%',
    marginTop: theme.spacing.unit * 10,
    marginLeft: '3%',
  },
  container1: {
    width: 500,
    margin: theme.spacing.unit * 2,
    minWidth: 500,
  },
});

class Converter extends React.Component {
  componentDidUpdate(prevProps) {
    const { valute, editCurrencyFrom } = this.props;
    if (valute !== prevProps.valute) {
      const select = Array.from(valute);
      const EUR = select.filter(a => a.code === 'EUR')[0];
      const USD = select.filter(a => a.code === 'USD')[0];
      if (EUR) editCurrencyFrom(0, EUR);
      if (USD) editCurrencyFrom(1, USD);
    }
  }

  render() {
    const { classes, converters, valute } = this.props;
    const {
      editConvertFrom, editCurrencyFrom, editCurrencyTo, deleteConverter,
    } = this.props;
    return (
      <div className={classes.container}>
        { converters.map(row => (
          <Paper
            key={row.id}
            className={classes.container1}
          >
            <PanelConverter
              valute={valute}
              pairConvert={row}
              editCurrencyFrom={editCurrencyFrom}
              editConvertFrom={editConvertFrom}
              editCurrencyTo={editCurrencyTo}
              deleteConverter={deleteConverter}
            />
          </Paper>
        ))}
      </div>
    );
  }
}

Converter.propTypes = {
  classes: PropTypes.object.isRequired,
  deleteConverter: PropTypes.func.isRequired,
  editCurrencyTo: PropTypes.func.isRequired,
  editCurrencyFrom: PropTypes.func.isRequired,
  editConvertFrom: PropTypes.func.isRequired,
  converters: PropTypes.array,
  valute: PropTypes.array,

};

Converter.defaultProps = {
  converters: [],
  valute: [],
};

export default withStyles(styles)(Converter);