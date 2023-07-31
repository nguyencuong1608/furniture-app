import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllProducts } from "../axios/axios";

export const getAllProducts = createAsyncThunk(
  "allproducts/getAllProducts",
  () => fetchAllProducts()
);

const initialState = {
  allProducts: [],
  featured_products: [],
  isLoading: true,
  isError: false,
  errorMsg: "",
};

export const allProductsSlice = createSlice({
  name: "allproducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allProducts = [...action.payload];
        state.featured_products = action.payload.filter(
          (item) => item.featured == true
        );
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMsg = action.error.message;
      });
  },
});

export const { clearCart } = allProductsSlice.actions;

export default allProductsSlice.reducer;
