import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";


const appStore = configureStore({

    reducer : {
        cart_bag : cartReducer,
    }
});

export default appStore;