import {configureStore} from "@reduxjs/toolkit";
import customerReducer from './slices/customerSlice'

export const store = configureStore({
    devTools:true,//when true, Redux DevTools are enabled (visible to developers in browser). For production or security reasons, you can set this to false.
    reducer:{
        customers:customerReducer
    }
})
//it is the state