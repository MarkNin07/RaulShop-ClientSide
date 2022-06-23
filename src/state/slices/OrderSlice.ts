import { createSlice } from "@reduxjs/toolkit";
import { productType } from "./ProductSlice";

type orderType= {
    productListSale: productType[]
}

const initialState: orderType = {
    productListSale: []
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addProd(state, action){
            state.productListSale.push(action.payload)
        },
        emptyProducts(state){
            state.productListSale = []
        }
    }
})

export type {orderType}
export default orderSlice.reducer
export const {addProd, emptyProducts} = orderSlice.actions;