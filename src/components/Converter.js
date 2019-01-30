import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 240,
  },
});

class Converter extends React.Component{
    render(){
      const {classes, valute} = this.props;
      const select = Array.from(valute);
        return(
          <div className={classes.container}>
          <Input
          defaultValue=""
          className={classes.input}
          inputProps={{
            'aria-label': 'Description',
          }}
        />
        <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-simple">Выберите валюту</InputLabel>
            <Select

            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
          { select.map(row => (
           
            <MenuItem value={row.id}>{row.name}</MenuItem>
            
            ))}

          </Select>
          </FormControl>
          <Select
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
            >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          </div>

        );
    }
}

export default withStyles(styles)(Converter);