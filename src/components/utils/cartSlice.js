import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart_bag',
    initialState: {
        items : [],
    },
    reducers: {
        addItems : (state,action)=>{
            state.items.push(action.payload);
        },
        removeItem : (state)=>{
            state.items.pop();
        },
        clearItems : (state)=>{
            state.items.length = 0;
        }
    }
});


export const { addItems, removeItems, clearItems } = cartSlice.actions;

export default cartSlice.reducer;