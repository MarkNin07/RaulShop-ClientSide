import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import stockistReducer from '../state/slices/ProviderSlice'

const store = configureStore(
    {
        reducer: {
            stockist: stockistReducer
        }

    }
)

export {store}
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()