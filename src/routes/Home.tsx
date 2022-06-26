import { useEffect, useState } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';

import SelectDate from '../components/SelectDate';
import TotalExpenses from '../components/TotalExpenses';

import '../App.css';
import { IExpenses } from '../interfaces';
import { RoutesEnum } from '../enums';

const Home = ({ onSelectDate }: any) => {
  const [date, setDate] = useState<string>('');
  const [totalExpenses, setTotalExpenses] = useState<string>('');

  const navigate = useNavigate();

  useEffect(() => {
    const getExpenses = async (): Promise<IExpenses[]> => {
      return (
        await fetch(`http://localhost:3001/despesas?mes=${date}&_sort=dia`, {
          method: 'GET',
        })
      ).json();
    };

    if (date) {
      getExpenses().then((expenses) => {
        getTotalExpense(expenses);
        onSelectDate(expenses);
      });
    }
  }, [date, onSelectDate]);

  useEffect(() => {
    date && navigate(`${RoutesEnum.EXPENSES}/${date}`);
  }, [date, navigate]);

  const dateHandler = (date: string) => setDate(date);

  const getTotalExpense = (expenses: IExpenses[]): void => {
    let totalExpense = 0;

    expenses.forEach((expenses) => (totalExpense += expenses.valor));

    setTotalExpenses(
      totalExpense.toLocaleString(undefined, {
        minimumFractionDigits: 0,
      })
    );
  };

  return (
    <div className='header'>
      <SelectDate onSelectDate={dateHandler} />
      <TotalExpenses totalExpenses={totalExpenses} />

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
