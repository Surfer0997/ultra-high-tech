import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { showToast } from '../../helpers/showToast';
import { clearCart, toggleIsCartVisible } from '../Cart/cartSlice';

const initialState = {
  currentForm: 1,
  firstForm: {
    firstName: '',
    nickName: '',
    email: '',
    phone: '',
    aboutYou: '',
  },
  secondForm: {
    country: '',
    city: '',
    street: '',
    category: '',
    wishes: '',
    house: '',
  },
  isOrderFormVisible: false,
  isOrderFormValid: false,
};

export const submitOrder = createAsyncThunk('orderForm/submitOrder', async (_, { dispatch }) => {
  console.log('asdasda');
  try {
    dispatch(sendThirdForm());
    dispatch(toggleIsCartVisible());
    dispatch(clearCart());
  } catch {
    return false;
  }
  return true;
});

const orderFormSlice = createSlice({
  name: 'orderForm',
  initialState,
  reducers: {
    setFormVisibility(state, action) {
      state.isOrderFormVisible = action.payload; // T/F
    },
    sendFirstForm(state, action) {
      state.firstForm = { ...action.payload };
      state.currentForm = 2;
      console.log(state.firstForm);
    },
    sendSecondForm(state, action) {
      state.secondForm = { ...action.payload };
      state.currentForm = 3;
      console.log(state.secondForm);
    },
    sendThirdForm(state) {
      state.firstForm = initialState.firstForm;
      state.secondForm = initialState.secondForm;
      state.currentForm = 1;
      state.isOrderFormVisible = false;
      console.log('Success');
    },
    resetForm(state) {
      state.currentForm = 1;
    },
  },
  extraReducers: builder => {
    builder.addCase(submitOrder.fulfilled, (state, action) => {
      showToast('SUCCESS', 'Order is placed!');
    });
  },
});

export const { sendFirstForm, sendSecondForm, sendThirdForm, setFormVisibility, resetForm } = orderFormSlice.actions;
export default orderFormSlice.reducer;
