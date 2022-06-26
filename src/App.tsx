import { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import Expenses from './routes/Expenses';

import { IExpenses } from './interfaces';
import { RoutesEnum } from './enums';

function App() {
  const [expenses, setExpenses] = useState<IExpenses[]>([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={RoutesEnum.HOME}
          element={<Home onSelectDate={setExpenses} />}
        >
          <Route
            path={`${RoutesEnum.EXPENSES}/:date`}
            element={<Expenses expenses={expenses} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
