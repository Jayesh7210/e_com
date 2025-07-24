// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";

// Example reducer (you can replace with your own)
import productReducer from "./features/product/productSlice"; 
// adjust if you don't have it

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
