import { possibleStatus } from './../../configuration/PossibleStatus';
import { createSlice } from '@reduxjs/toolkit';
import { productType } from './ProductSlice';
import getAllReceipts from '../../actions/receipts/GetAllReceipts';
import { RootState } from '../store';
import createNewReceipt from '../../actions/receipts/PostNewReceipt';

type receiptType = {
    receiptId: string,
    quantity: number,
    date: string,
    product: productType
}

interface initialStateType {
    receipts: receiptType[],
    status: possibleStatus,
    error: string | null
}

const initialState : initialStateType = {
    receipts: [],
    status: possibleStatus.IDLE,
    error: null
}

const receiptSlice = createSlice(
    {
        name: 'receipt',
        initialState,
        reducers: {

        },
        extraReducers : (builder) => {
            //Get 
            builder.addCase(getAllReceipts.pending, (state, action) => 
            {
                state.status = possibleStatus.PENDING;
            })
            builder.addCase(getAllReceipts.fulfilled, (state, action) => 
            {
                state.status = possibleStatus.COMPLETED;
                state.receipts = action.payload
            })
            builder.addCase(getAllReceipts.rejected, (state, action) => 
            {
                state.status = possibleStatus.FAILED;
                state.error = "Your request failed"
                state.receipts = []
            })
            //Post
            builder.addCase(createNewReceipt.pending, (state, action) => 
            {
                state.status = possibleStatus.PENDING;
            })
            builder.addCase(createNewReceipt.fulfilled, (state, action) => 
            {
                state.status = possibleStatus.COMPLETED;
                state.receipts.push(action.payload)
            })
            builder.addCase(createNewReceipt.rejected, (state, action) => 
            {
                state.status = possibleStatus.FAILED;
                state.error = "Request failed";
                state.receipts = []
            })
        }

    })

export type {receiptType, initialStateType}
export default receiptSlice.reducer

export const selectReceiptsState = () => (state: RootState) => state.receipt.receipts
export const selectReceiptsStatus = () => (state: RootState) => state.receipt.status
export const selectReceiptsFetchError = () => (state: RootState) => state.receipt.error