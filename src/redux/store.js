import { configureStore } from '@reduxjs/toolkit'
import books from './bookSlice';
import list from './listSlice';

export const store = configureStore({
  reducer: {
    books: books,
    list: list,
  },
})