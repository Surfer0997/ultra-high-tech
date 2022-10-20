import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../components/Cart/cartSlice';
import productsSlice from '../components/Main/Shop/Products/productsSlice';

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productsSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;

export default store;