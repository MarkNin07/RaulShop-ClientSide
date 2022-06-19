import { createSlice } from "@reduxjs/toolkit"
import getAllStockists from "../../actions/stockists/GetAllStockists"
import { possibleStatus } from "../../configuration/PossibleStatus"
import { RootState } from "../store"


type stockistType = {
    stockistId : string,
    stockistName : string,
    stockistPersonalId : string,
    phoneNumber : string
}

interface initialStateType {
    stockists: stockistType[],
    status: possibleStatus,
    error: string | null
}

const initialState : initialStateType = {
    stockists: [],
    status: possibleStatus.IDLE,
    error: null
}

const stockistSlice = createSlice(
    {
        name: 'stockist',
        initialState,
        reducers: {
           
        },
        extraReducers : (builder) => {
            //Get
            builder.addCase(getAllStockists.pending, (state, action) => 
            {
                state.status = possibleStatus.PENDING;
            })
            builder.addCase(getAllStockists.fulfilled, (state, action) => 
            {
                state.status = possibleStatus.COMPLETED;
                state.stockists = action.payload
            })
            builder.addCase(getAllStockists.rejected, (state, action) => 
            {
                state.status = possibleStatus.FAILED;
                state.error = "Your request failed"
                state.stockists = []
            })
        }
    })

export type { stockistType, initialStateType }
export default stockistSlice.reducer

export const selectStockistsState = () => (state: RootState) => state.stockist.stockists
export const selectStockistsStatus = () => (state: RootState) => state.stockist.status
export const selectStockistsFetchError = () => (state: RootState) => state.stockist.error