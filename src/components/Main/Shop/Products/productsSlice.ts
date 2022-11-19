import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Book, LoadingStatus } from '../../../../types/types';
import axios from 'axios';

const BOOK_API_URL = 'https://gutendex.com/books/?topic=';

interface GetBooksProps {
  category?: string,
  page?: string,
}

export const getBooks = createAsyncThunk(
  'books/getCategoryBooks',
  async (props:GetBooksProps, { rejectWithValue, dispatch }) => {
    try {
      if (props.category) {
        console.log('Category exists');
        const data = await axios.get(BOOK_API_URL + props.category);
        dispatch(setBooks(data.data));
      } else {
        const data = await axios.get(props.page as string);
        dispatch(setBooks(data.data));
      }
      
      // INTERCEPTOR
      axios.interceptors.response.use(response => {
        console.log(response);
        return response;
      });
  //    dispatch(setBooks(data.data));
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const initialState = {
  status: LoadingStatus.loading,
  products:  [] as Book[],
  previousPage: null as null | string,
  nextPage: null as null | string,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.products = action.payload.results;
      state.previousPage = action.payload.previous;
      state.nextPage = action.payload.next;
    },
  },
  extraReducers(builder) {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.status = LoadingStatus.success;
    });
    builder.addCase(getBooks.pending, (state, action) => {
      state.status = LoadingStatus.loading;
    });
    builder.addCase(getBooks.rejected, (state, action) => {
      state.status = LoadingStatus.error;
    });
  },
});

export const { setBooks } = productsSlice.actions;
export default productsSlice.reducer;
