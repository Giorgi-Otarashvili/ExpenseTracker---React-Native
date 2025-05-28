import { createSlice } from '@reduxjs/toolkit';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'საკვები',
    amount: 25.50,
    date: new Date('2024-12-15'),
  },
  {
    id: 'e2',
    description: 'ტრანსპორტი',
    amount: 15.00,
    date: new Date('2024-12-14'),
  },
];

const expensesSlice = createSlice({
  name: 'expenses',
  initialState: {
    expenses: DUMMY_EXPENSES,
  },
  reducers: {
    addExpense: (state, action) => {
      const newExpense = {
        ...action.payload,
        id: Math.random().toString(),
      };
      state.expenses.unshift(newExpense); 
    },
    updateExpense: (state, action) => {
      const { id, expenseData } = action.payload;
      const existingExpense = state.expenses.find(expense => expense.id === id);
      if (existingExpense) {
        Object.assign(existingExpense, expenseData);
      }
    },
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(expense => expense.id !== action.payload);
    },
  },
});

export const { addExpense, updateExpense, deleteExpense } = expensesSlice.actions;
export default expensesSlice.reducer;