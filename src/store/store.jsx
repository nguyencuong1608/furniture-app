import { configureStore } from "@reduxjs/toolkit";
import allProductsReducer from "../Slices/AllProductsSlice";
import filterProductReducer from "../Slices/filterProductSlice";
import singleProductReducer from "../Slices/SingleProductSlice";
import cartReducer from "../Slices/CartSlice";
export const store = configureStore({
  reducer: {
    allProducts: allProductsReducer,
    filteredProducts: filterProductReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer,
  },
});
