import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentForm: 1,
    firstForm: {
        firstName:'',
        nickName:'',
        email:'',
        phone:'',
        aboutYou:'',
    },
    secondForm: {

    },
    thirdForm: {

    },
    isOrderFormValid: false,
}

const orderFormSlice = createSlice({
    name: 'orderForm',
    initialState,
    reducers: {
        sendFirstForm(state, action) {
            state.firstForm = {...action.payload};
            state.currentForm = 2;
            console.log(state.firstForm);
        },
        sendSecondForm(state, action) {
            state.secondForm = {...action.payload};
            state.currentForm = 2;
            console.log(state.secondForm);
        },
        sendThirdForm(state, action) {
            state.thirdForm = {...action.payload};
            state.currentForm = 3; // do smth with it
            state.isOrderFormValid = true;
            // some http request somewhere
            console.log(state.thirdForm);
        },
    }
});


export const {sendFirstForm} = orderFormSlice.actions;
export default orderFormSlice.reducer;