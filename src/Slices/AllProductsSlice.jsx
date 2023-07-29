import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllProducts } from "../axios/axios";
const products_url = "https://course-api.com/react-store-products";

export const getAllProducts = createAsyncThunk(
  "allproducts/getAllProducts",
  () => {
    return fetch(products_url)
      .then((resp) => {
        return resp.json();
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
);

// export const getAllProducts = createAsyncThunk(
//   "allproducts/getAllProducts",
//   () => {
//     return fetchAllProducts();
//   }
// );

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
        console.log(action.payload);
        // state.errorMsg = action.payload
        console.log(1);
      });
  },
});

export const { clearCart } = allProductsSlice.actions;

export default allProductsSlice.reducer;
