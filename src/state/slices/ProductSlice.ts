import { possibleStatus } from './../../configuration/PossibleStatus';
import { createSlice } from '@reduxjs/toolkit';
import { stockistType } from './ProviderSlice';
import getAllProducts from '../../actions/products/GetAllProducts';
import { RootState } from '../store';

type productType = {
    productId: string,
    productName: string,
    price: number,
    description: string,
    minProdAmount: number,
    maxProdAmount: number,
    unitsAvailable: number,
    stockist: stockistType
}

interface initialStateType {
    products: productType[],
    status:possibleStatus,
    error: string | null
}

const initialState : initialStateType = {
    products: [],
    status: possibleStatus.IDLE,
    error: null
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    },
    extraReducers : (builder) => {
        //Get
        builder.addCase(getAllProducts.pending, (state, action) => 
        {
            state.status = possibleStatus.PENDING;
        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => 
        {
            state.status = possibleStatus.COMPLETED;
            state.products = action.payload
        })
        builder.addCase(getAllProducts.rejected, (state, action) => 
        {
            state.status = possibleStatus.FAILED;
            state.error = "Your request failed"
            state.products = []
        })
    }
})

export type {productType, initialStateType}
export default productSlice.reducer

export const selectProductState = () => (state: RootState) => state.product.products
export const selectProductStatus = () => (state: RootState) => state.product.status
export const selectProductFetchError = () => (state: RootState) => state.product.error