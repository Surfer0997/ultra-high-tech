import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Book, LoadingStatus } from '../../../../types/types';
import axios from 'axios';

const BOOK_API_URL = 'https://gutendex.com/books/?topic=';

export const getCategoryBooks = createAsyncThunk(
  'books/getCategoryBooks',
  async (category: string, { rejectWithValue, dispatch }) => {
    try {
      const data = await axios.get(BOOK_API_URL + category);

      // INTERCEPTOR
      axios.interceptors.response.use(response => {
        console.log(response);
        return response;
      });
      //
      dispatch(setBooks(data.data.results));
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

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
    },
  },
  extraReducers(builder) {
    builder.addCase(getCategoryBooks.fulfilled, (state, action) => {
      state.status = LoadingStatus.success;
    });
    builder.addCase(getCategoryBooks.pending, (state, action) => {
      state.status = LoadingStatus.loading;
    });
    builder.addCase(getCategoryBooks.rejected, (state, action) => {
      state.status = LoadingStatus.error;
    });
  },
});

export const { setBooks } = productsSlice.actions;
export default productsSlice.reducer;
