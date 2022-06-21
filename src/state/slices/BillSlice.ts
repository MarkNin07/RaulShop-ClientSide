import { createSlice } from '@reduxjs/toolkit';
import createNewBill from '../../actions/bills/CreateBill';
import getAllBills from '../../actions/bills/GetAllBills';
import { possibleStatus } from '../../configuration/PossibleStatus';
import { RootState } from '../store';
import { productType } from './ProductSlice';

type billType = {
    billId: string,
    date: string,
    clientName: string,
    salesPerson: string,
    totalBill: number,
    products: productType[]
}

interface initialStateType {
    bills: billType[],
    status: possibleStatus,
    error: string | null
}

const initialState : initialStateType = {
    bills : [],
    status : possibleStatus.IDLE,
    error : null
}

const billSlice = createSlice({
    name : "bill",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        //Get
        builder.addCase(getAllBills.pending, (state, action) => 
        {
            state.status = possibleStatus.PENDING
        })
        builder.addCase(getAllBills.fulfilled, (state, action) => 
        {
            state.status = possibleStatus.COMPLETED;
            state.bills = action.payload;   
        })
        builder.addCase(getAllBills.rejected, (state, action) => 
        {
            state.status = possibleStatus.FAILED;
            state.error =  "Your request failed"
            state.bills = [] 
        })
        //Post
        builder.addCase(createNewBill.pending, (state, action) => 
        {
            state.status = possibleStatus.PENDING
        })
        builder.addCase(createNewBill.fulfilled, (state, action) => 
        {
            state.status = possibleStatus.COMPLETED
            state.bills.push(action.payload)
        })
        builder.addCase(createNewBill.rejected, (state, action) => 
        {
            state.status = possibleStatus.FAILED
            state.error = "Your request failed"
            state.bills = []
        })        
    }
})

export type {billType, initialStateType}
export default billSlice.reducer


export const selectBillState = () => (state: RootState) => state.bill.bills
export const selectBillStatus = () => (state: RootState) => state.bill.status
export const selectBillFetchError = () => (state: RootState) => state.bill.error