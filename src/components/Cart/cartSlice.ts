import { createSlice } from '@reduxjs/toolkit';

type CartItem = {
  id: number;
  title: string;
  price: number;
  amount: number;
};

const initialState = {
  cartIsVisible: false,
  cart: [] as CartItem[],
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      console.log('Created cart item:', action.payload);
      state.cart = [...state.cart, action.payload];
    },
    toggleIsCartVisible: (state) => {
        state.cartIsVisible = !state.cartIsVisible;
        console.log(state.cartIsVisible);
    }
  },
});

export const { addCartItem, toggleIsCartVisible } = cartSlice.actions;
export default cartSlice.reducer;
