import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../utils/productSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
