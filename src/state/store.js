import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./features";

const store = configureStore({
    reducer : {
        user : userSlice
    }
})

export default store