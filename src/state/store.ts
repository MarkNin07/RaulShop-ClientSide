import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import stockistReducer from '../state/slices/ProviderSlice'
import productReducer from '../state/slices/ProductSlice'
import billReducer from '../state/slices/BillSlice'
import receiptReducer from '../state/slices/ReceiptSlice'
import orderReducer from './slices/OrderSlice'
import loginReducer from './slices/LoginSlice'

const store = configureStore(
    {
        reducer: {
            login: loginReducer,
            stockist: stockistReducer,
            product: productReducer,
            bill: billReducer,
            receipt: receiptReducer,
            order: orderReducer
        }
    }
)

export {store}
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()