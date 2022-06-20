import { createAsyncThunk } from "@reduxjs/toolkit";
import { urlApi } from "../../configuration/ApiURL";
import { productType } from "../../state/slices/ProductSlice";


const deleteProd = urlApi + "/delete/product"

const deleteProduct = createAsyncThunk('deleteProduct', async(product: productType) =>
{
    const response = await fetch(`${deleteProd}/${product.productId}`, {
        method: "DELETE"
    })
    return {deleted: response.ok, productId: product.productId}
})

export default deleteProduct