import { createAsyncThunk } from '@reduxjs/toolkit';
import { receiptType } from '../../state/slices/ReceiptSlice';
import { urlApi } from './../../configuration/ApiURL';

const getAllReceiptsByUrl = urlApi +"/get/all/receipts"

const getAllReceipts = createAsyncThunk('allReceipts', async () => 
{
    const response = await fetch(getAllReceiptsByUrl)
    return (await response.json() as receiptType[])
})

export default getAllReceipts