import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Book } from '../../../../types/types';
import axios from 'axios';

const BOOK_API_URL = 'https://gutendex.com/books/?topic=';

export const getCategoryBooks = createAsyncThunk(
  'books/getCategoryBooks',
 async (category:string, {rejectWithValue, dispatch}) => {
    const data = await axios.get(BOOK_API_URL+category);
    dispatch(setBooks(data.data.results));
 }
)

const initialState = {
  loaded: false,
  products: [] as Book[],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.products = action.payload;
      console.log(state.products);
    }
  },
  extraReducers: {

  }
});

export const {setBooks} = productsSlice.actions;
export default productsSlice.reducer;
