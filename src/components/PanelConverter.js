import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { RUB } from '../constants/index';
import FabDelete from './FabDelete';
import ItemsRender from './ItemsRender';

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
  input: {
    margin: theme.spacing.unit * 2,
  },
  inputLabel: {
    marginLeft: theme.spacing.unit * 2,
  },
  select: {
    margin: theme.spacing.unit * 2,
    width: 200,
  },
  itemMenu: {
    margin: theme.spacing.unit,
    width: 100,
  },
  formControl: {
    margin: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
  },

});

class PanelConverter extends React.Component {
    inputChange = (event) => {
      const { pairConvert, editConvertFrom } = this.props;
      editConvertFrom(pairConvert.id, event.target.value);
    }

    render() {
      const { classes, valute, pairConvert } = this.props;
      const {
        editCurrencyFrom, editCurrencyTo, deleteConverter,
      } = this.props;
      const select = Array.from(valute);
      select.unshift(RUB);
      return (
        <div>
          <Toolbar>
            <FabDelete
              id={pairConvert.id}
              deleteConverter={deleteConverter}
            />
            <Typography variant="h6" color="inherit">
              Кoнвертер валют
            </Typography>
          </Toolbar>
          <FormControl className={classes.formControl}>
            <TextField
              className={classes.input}
              type="number"
              defaultValue={pairConvert.convertFrom}
              onChange={this.inputChange}
            />
            <h4 className={classes.input}>{Math.round(pairConvert.convertTo * 10000) / 10000}</h4>
          </FormControl>
          <FormControl className={classes.formControl}>
            <ItemsRender
              currencies={select}
              editCurrency={editCurrencyFrom}
              currency={pairConvert.currencyFrom}
              id={pairConvert.id}
            />
            <ItemsRender
              currencies={select}
              editCurrency={editCurrencyTo}
              currency={pairConvert.currencyTo}
              id={pairConvert.id}
            />
          </FormControl>
        </div>
      );
    }
}
PanelConverter.propTypes = {
  classes: PropTypes.object.isRequired,
  deleteConverter: PropTypes.func.isRequired,
  editCurrencyTo: PropTypes.func.isRequired,
  editCurrencyFrom: PropTypes.func.isRequired,
  editConvertFrom: PropTypes.func.isRequired,
  pairConvert: PropTypes.object,
  valute: PropTypes.array,

};

PanelConverter.defaultProps = {
  pairConvert: {},
  valute: [],
};

export default withStyles(styles)(PanelConverter);
