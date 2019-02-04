import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CurrencyFormatter from 'currencyformatter.js';
import CircularProgress from '@material-ui/core/CircularProgress';
import TableHead from '@material-ui/core/TableHead';
import Flag from 'react-world-flags';


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '94%',
    marginTop: theme.spacing.unit * 3,
    buttom: theme.spacing.unit * 10,
    overflowX: 'auto',
    marginRight: '3%',
    marginLeft: '3%',
  },
  table: {
    minWidth: 700,
  },
  footer: {
    marginTop: theme.spacing.unit * 20,
  },

  row: {
  '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  currencyGrowth: {
    color: 'green',
  },
  currencyFall: {
    color: 'red',
  },
});

class CurrencyTable extends React.Component{

  componentDidMount(){
    this.props.getListCurrencies();
  }

  renderTemlate(){
    const { classes, valute,isFetching, error} = this.props;
    if (error) {
      return (
        <p>Во время запроса произошла ошибка, пожалуйста, обновите страницу</p>
      );
    }

    if (isFetching) {
      return <CircularProgress disableShrink />;
    }else {
      const rows = Array.from(valute);  
      return (
          <Table className={classes.table}>
            <TableHead >
              <TableRow >
                  <CustomTableCell>Флаг</CustomTableCell>
                  <CustomTableCell>Код</CustomTableCell>
                  <CustomTableCell>Номинал</CustomTableCell>
                  <CustomTableCell>Валюта</CustomTableCell>
                  <CustomTableCell>Курс ЦБ</CustomTableCell>
                  <CustomTableCell>Изменения</CustomTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              { rows.map(row => (
                <TableRow className={classes.row} key={row.id}>
                  <CustomTableCell >
                    <Flag code={row.code[0]+row.code[1]} height="20" width="25" fallback={ <span></span> }/>
                  </CustomTableCell>
                  <CustomTableCell >{row.code}</CustomTableCell>
                  <CustomTableCell >
                    {CurrencyFormatter.format(row.nominal, { currency: row.code, locale: 'ru_RU' })}
                  </CustomTableCell>
                  <CustomTableCell >{row.name}</CustomTableCell>
                  <CustomTableCell >{row.value}</CustomTableCell>
                  <CustomTableCell >{this.getCurrencyChange(row.value, row.prev)}</CustomTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table> 
    );
  }
} 

getCurrencyChange(value, prev){
  const {classes} = this.props;
  let   difference = value - prev;
  let m = Math.pow(10,4);
  difference =  Math.round(difference*m)/m;
  
  if (difference >= 0)
  return <p className={classes.currencyGrowth}>+{difference} ▲</p>
  else
  return <p className={classes.currencyFall}>{difference} ▼</p>
}

render() {
    const { classes, } = this.props;
    return (
      <div>
          <Paper className={classes.root}>{this.renderTemlate()}</Paper>
          <div className={classes.footer}></div>
      </div>
            );
    
  }
}

export default withStyles(styles)(CurrencyTable);