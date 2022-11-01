import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name : 'user',
    initialState : {
        fisrtName : 'John',
        lastName : 'DOE',
        isLogged : false
    },
    reducers : {
        signIn : (state, action) => {
            state.isLogged = !state.isLogged
            console.log(state.isLogged)
        }
    }
})

export const {signIn} = userSlice.actions

export default userSlice.reducer