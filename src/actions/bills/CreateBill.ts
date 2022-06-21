import { createAsyncThunk } from "@reduxjs/toolkit";
import { urlApi } from "../../configuration/ApiURL";
import { billType } from "../../state/slices/BillSlice";

const createBill = urlApi + '/create/bill'

const createNewBill = createAsyncThunk('createNewBill', async(bill:billType) => 
{
    const response = await fetch(createBill, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(bill)
    })
    return (await response.json()) as billType
})

export default createNewBill