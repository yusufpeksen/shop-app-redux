import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice.js"
import productSlice from "./productSlice.js";

export const store = configureStore({
    reducer: {
        categories : categorySlice,
        products : productSlice
    }
})