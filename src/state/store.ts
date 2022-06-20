import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import stockistReducer from '../state/slices/ProviderSlice'
import productReducer from '../state/slices/ProductSlice'
import billReducer from '../state/slices/BillSlice'
import receiptReducer from '../state/slices/ReceiptSlice'


const store = configureStore(
    {
        reducer: {
            stockist: stockistReducer,
            product: productReducer,
            bill: billReducer,
            receipt: receiptReducer
        }
    }
)

export {store}
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()