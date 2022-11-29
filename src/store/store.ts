import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../components/Cart/cartSlice';
import orderFormSlice from '../components/Forms/orderFormSlice';
import productsSlice from '../components/Main/Shop/Products/productsSlice';

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productsSlice,
        orderForm: orderFormSlice, 
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;