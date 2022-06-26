import React, { useEffect, useState } from 'react';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import {
  createStyles,
  FormControl,
  makeStyles,
  Theme,
} from '@material-ui/core';

import './select-date.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  })
);

const SelectDate = ({ onSelectDate }: any) => {
  const [year, selectYear] = useState<string>('');
  const [month, selectMonth] = useState<string>('');
  const classes = useStyles();

  const selectYearHandler = (event: React.ChangeEvent<{ value: unknown }>) =>
    selectYear(event.target.value as string);

  const selectMonthHandler = (event: React.ChangeEvent<{ value: unknown }>) =>
    selectMonth(event.target.value as string);

  useEffect(() => {
    if (year && month) {
      onSelectDate(`${year}-${month}`);
    }
  }, [month, year, onSelectDate]);

  return (
    <div className='date'>
      <FormControl className={classes.formControl}>
        <InputLabel id='year-select'>Ano</InputLabel>
        <Select labelId='year-select' value={year} onChange={selectYearHandler}>
          <MenuItem value={''}>
            <em>Nenhum</em>
          </MenuItem>
          <MenuItem value={'2020'}>2020</MenuItem>
          <MenuItem value={'2021'}>2021</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id='month-select'>Mês</InputLabel>
        <Select
          labelId='month-select'
          value={month}
          onChange={selectMonthHandler}
        >
          <MenuItem value={''}>
            <em>Nenhum</em>
          </MenuItem>
          <MenuItem value={'01'}>Janeiro</MenuItem>
          <MenuItem value={'02'}>Fevereiro</MenuItem>
          <MenuItem value={'03'}>Março</MenuItem>
          <MenuItem value={'04'}>Abril</MenuItem>
          <MenuItem value={'05'}>Maio</MenuItem>
          <MenuItem value={'06'}>Junho</MenuItem>
          <MenuItem value={'07'}>Julho</MenuItem>
          <MenuItem value={'08'}>Agosto</MenuItem>
          <MenuItem value={'09'}>Setembro</MenuItem>
          <MenuItem value={'10'}>Outubro</MenuItem>
          <MenuItem value={'11'}>Novembro</MenuItem>
          <MenuItem value={'12'}>Dezembro</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectDate;
