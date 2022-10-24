import { createSlice } from '@reduxjs/toolkit';

export type cartItem = {
  id: number;
  title: string;
  price: number;
  amount: number;
};

const initialState = {
  cartIsVisible: false,
  cart: [] as cartItem[],
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCartItem: (state, action) => {
      const { id, amount} = action.payload;
      const existingItemIndex = state.cart.findIndex(item => id === item.id);
      if (existingItemIndex < 0) {
        state.cart = [...state.cart, action.payload];
      } else {
        if (state.cart[existingItemIndex].amount + amount <= 0) {
          state.cart = state.cart.filter(item => item.id !== id);
        } else {
          const updatedItem = {
            ...state.cart[existingItemIndex],
            amount: state.cart[existingItemIndex].amount + amount,
          };
          state.cart = [
            ...state.cart.slice(0, existingItemIndex),
            updatedItem,
            ...state.cart.slice(existingItemIndex + 1),
          ];
        }
      }
      /* COUNT TOTAL */
      state.total = state.cart.reduce(
        (acc, item) => acc + item.amount * item.price,
        0
      );
    },
    toggleIsCartVisible: state => {
      state.cartIsVisible = !state.cartIsVisible;
      console.log(state.cartIsVisible);
    },
  },
});

export const { updateCartItem, toggleIsCartVisible } = cartSlice.actions;
export default cartSlice.reducer;
