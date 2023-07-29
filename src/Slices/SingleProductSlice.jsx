import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const single_product_url = `https://course-api.com/react-store-single-product?id=`;

const initialState = {
  product: {},
  isLoading: true,
  isError: false,
};

export const getSingleProduct = createAsyncThunk("product/getProduct", (id) => {
  return fetch(`${single_product_url}${id}`)
    .then((resp) => {
      return resp.json();
    })
    .catch((err) => console.log(error));
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
        console.log(action);
      });
  },
});

export default singleProductSlice.reducer;
