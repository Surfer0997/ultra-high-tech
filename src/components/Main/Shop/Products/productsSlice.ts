import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Book, LoadingStatus } from '../../../../types/types';
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
  status: LoadingStatus.loading,
  products: [] as Book[],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.products = action.payload;
    }
  },
  extraReducers(builder) {
    builder.addCase(getCategoryBooks.fulfilled, (state, action)=>{
      state.status = LoadingStatus.success;
      console.log('fullfilled');
    });
    builder.addCase(getCategoryBooks.pending, (state, action)=>{
      state.status = LoadingStatus.loading;
      console.log('pending');
    });
    builder.addCase(getCategoryBooks.rejected, (state, action)=>{
      state.status = LoadingStatus.error;
      console.log('rejected');
    });
  }
});

export const {setBooks} = productsSlice.actions;
export default productsSlice.reducer;
