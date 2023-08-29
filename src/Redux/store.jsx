import { configureStore } from "@reduxjs/toolkit";
import countReducer from './countslice'
export default configureStore({
    reducer:{
       
        count:countReducer
        // cart: countReducer
    }
})