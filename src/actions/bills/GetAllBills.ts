import { createAsyncThunk } from "@reduxjs/toolkit";
import { urlApi } from "../../configuration/ApiURL";
import { billType } from "../../state/slices/BillSlice";

const getAllBillsByUrl = urlApi + "/get/all/bills"

const getAllBills = createAsyncThunk('allBills', async() => 
{
    const response = await fetch(getAllBillsByUrl)
    return (await response.json() as billType[])
})

export default getAllBills