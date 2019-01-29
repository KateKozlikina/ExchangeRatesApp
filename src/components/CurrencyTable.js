import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

let rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

class CurrencyTable extends React.Component{

  componentDidMount(){
    this.props.getExangeRates();
  }

  renderTemlate(){
    const { classes, quotes,isFetching, error,  getExangeRates} = this.props;
    console.log(quotes, isFetching, error);
    if (error) {
      return (
        <p>Во время запроса произошла ошибка, пожалуйста, обновите страницу</p>
      );
    }

    if (isFetching) {
      return <p>Загружаю...</p>;
    }else {
      console.log('до отрисовки',quotes);
      rows = Array.from(quotes);
      console.log('до отрисовки',rows);
      return (
      
        <Table className={classes.table}>
        <TableBody>
           { rows.map(row => (
            <TableRow key={row.id}>
              <TableCell align="right">{row.code}</TableCell>
              <TableCell align="right">{row.course}</TableCell>
            </TableRow>
          ))} 
        </TableBody>
        </Table>
      
    );
      
    } 

  }
  render() {
    const { classes, } = this.props;
    return <Paper className={classes.root}>{this.renderTemlate()}</Paper>
    
  }

}


CurrencyTable.propTypes = {
  classes: PropTypes.object.isRequired,
  getExangeRates: PropTypes.func.isRequired, 
};

export default withStyles(styles)(CurrencyTable);