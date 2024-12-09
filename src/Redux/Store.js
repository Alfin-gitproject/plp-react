import { configureStore } from "@reduxjs/toolkit";
import Productdataslice from "./Productdataslice";


export const store = configureStore({
    reducer: {
        ProductData: Productdataslice
        
    }
})

export default store;

