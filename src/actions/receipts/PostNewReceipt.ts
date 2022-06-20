import { createAsyncThunk } from "@reduxjs/toolkit";
import { urlApi } from "../../configuration/ApiURL";
import { receiptType } from "../../state/slices/ReceiptSlice";

const createReceipt = urlApi + "/create/receipt"

const createNewReceipt = createAsyncThunk('createNewReceipt', async (receipt: receiptType) => 
{
    const response = await fetch(createReceipt, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(receipt)
    })
    return (await response.json()) as receiptType
})

export default createNewReceipt