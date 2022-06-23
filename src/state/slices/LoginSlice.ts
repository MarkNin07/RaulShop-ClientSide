import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: false
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{
        loginInReducer(state, action){
            const stateLogin = {...state, user: action.payload}
            return stateLogin
        },
        logoutInReducer(){
            return {user: false}
        }
        
    }
})

export const {loginInReducer, logoutInReducer} = loginSlice.actions

export default loginSlice.reducer