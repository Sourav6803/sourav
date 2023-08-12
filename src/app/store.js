import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/User/userSlice"




export const store = configureStore({
    reducer: {
        auth: authReducer,
    }
})