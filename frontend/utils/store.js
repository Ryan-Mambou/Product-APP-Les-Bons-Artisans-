import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../src/feature/productSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
