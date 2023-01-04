import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[],
    fav:[],
}
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        AddProducts: (state,action) =>{
            state.products = action.payload
        },
        AddToFav: (state,action) => {
            state.fav.push(action.payload)
        },
        RemoveFromFav: (state,action) =>{
           state.fav =  state.fav.filter( item => item.id !== action.payload.id)
        }
    },
})

export const {AddProducts,AddToFav,RemoveFromFav} = productSlice.actions;
export default productSlice.reducer