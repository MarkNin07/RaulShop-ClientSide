import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import stockistReducer from '../state/slices/ProviderSlice'
import productReducer from '../state/slices/ProductSlice'
const store = configureStore(
    {
        reducer: {
            stockist: stockistReducer,
            product: productReducer
        }

    }
)

export {store}
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()