import { createAsyncThunk } from "@reduxjs/toolkit";
import { urlApi } from "../../configuration/ApiURL";
import { stockistType } from "../../state/slices/ProviderSlice";


const getAllStockistsByUrl = urlApi + "/get/all/stockists"

const getAllStockists = createAsyncThunk('allstockists', async() => 
{
    const response = await fetch(getAllStockistsByUrl)
    return (await response.json() as stockistType[])
})

export default getAllStockists