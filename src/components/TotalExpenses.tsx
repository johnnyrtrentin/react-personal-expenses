import { TotalExpensesProps } from '../interfaces';

import './total-expenses.css';

const TotalExpenses = ({ totalExpenses }: TotalExpensesProps) => {
  return (
    <div className='total-expenses'>
      Despensas total: <strong>R$: {totalExpenses}</strong>
    </div>
  );
};

export default TotalExpenses;
