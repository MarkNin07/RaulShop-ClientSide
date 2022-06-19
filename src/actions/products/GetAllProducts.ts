import { createAsyncThunk } from "@reduxjs/toolkit";
import { urlApi } from "../../configuration/ApiURL";
import { productType } from "../../state/slices/ProductSlice";

const getAllProductsByUrl = urlApi + "/get/all/products"

const getAllProducts = createAsyncThunk('allProducts', async() => 
{
    const response = await fetch(getAllProductsByUrl)
    return (await response.json() as productType[])
})

export default getAllProducts