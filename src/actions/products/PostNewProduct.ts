import { createAsyncThunk } from "@reduxjs/toolkit";
import { urlApi } from "../../configuration/ApiURL";
import { productType } from "../../state/slices/ProductSlice";


const createNewProduct = urlApi + "/create/product"

const createProduct = createAsyncThunk('createProduct', async (product: productType) => 
{
    const response = await fetch(createNewProduct, {
        method: "POST",
        headers: {
            'Content-Type': "application/json; charset=UTF-8"
        },
        body: JSON.stringify(product)
    })
    return (await response.json()) as productType;
})

export default createProduct