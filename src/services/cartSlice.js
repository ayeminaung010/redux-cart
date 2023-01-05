import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart : (state,action) =>{
            const isExisted = state.cart?.find( i => i.id === action.payload.id)
            if(isExisted){
                return state;
            }else{
                state.cart.push(action.payload)
            }
            
        },
        removeFromCart : (state,action) =>{
            state.cart = state.cart?.filter(item => item.id !== action.payload.id)
        },
        cleanCart:(state,action) =>{
            return {...state,cart:[]}
        }
    }
})

export const {addToCart,removeFromCart,cleanCart} = cartSlice.actions
export default cartSlice.reducer