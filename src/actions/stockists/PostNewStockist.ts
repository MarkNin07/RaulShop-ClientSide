import { createAsyncThunk } from "@reduxjs/toolkit";
import { urlApi } from "../../configuration/ApiURL";
import { stockistType } from "../../state/slices/ProviderSlice";

const createNewStockist = urlApi + "/create/stockist"

const createStockist = createAsyncThunk('createStockist', async (stockist: stockistType) =>
{
    const response = await fetch(createNewStockist, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(stockist)
    })
    return (await response.json()) as stockistType;
})

export default createStockist;