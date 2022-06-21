import { createAsyncThunk } from "@reduxjs/toolkit";
import { urlApi } from "../../configuration/ApiURL";
import { productType } from "../../state/slices/ProductSlice";


const putProduct = urlApi + "/update/product"

const updateProduct = createAsyncThunk('updateProduct', async(product: productType) => 
{
    const response = await fetch(putProduct, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(product)
    })
    return (await response.json()) as productType
})

export default updateProduct