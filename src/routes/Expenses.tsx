import { makeStyles, Paper } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { ExpensesProps } from '../interfaces';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    marginTop: 20,
  },
});

const Expenses = ({ expenses }: ExpensesProps) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Despesa</TableCell>
            <TableCell>Categoria</TableCell>
            <TableCell>Dia</TableCell>
            <TableCell>Valor (R$)</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {expenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell component='th' scope='row'>
                {expense.descricao}
              </TableCell>
              <TableCell>{expense.categoria}</TableCell>
              <TableCell>{expense.dia}</TableCell>
              <TableCell>{expense.valor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Expenses;
