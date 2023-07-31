import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSingleProducts } from "../axios/axios";

const initialState = {
  product: {},
  isLoading: true,
  isError: false,
  errorMsg: "",
};

export const getSingleProduct = createAsyncThunk("product/getProduct", (id) => {
  return fetchSingleProducts(id);
});

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSingleProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = { ...action.payload };
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMsg = action.error.message;
      });
  },
});

export default singleProductSlice.reducer;
