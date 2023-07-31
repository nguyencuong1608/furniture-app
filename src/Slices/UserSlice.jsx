import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const getUser = createAsyncThunk("user/getUser", () =>
//   fetchAllProducts()
// );

const initialState = {
  user: [],
  isLoading: true,
  isError: false,
  errorMsg: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMsg = action.error.message;
      });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
