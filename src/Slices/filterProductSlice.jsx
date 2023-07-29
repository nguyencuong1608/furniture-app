import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filtered_products: [],
  filter: {
    category: "all",
    color: "all",
    company: "all",
    price: 0,
    min_price: 0,
    max_price: 0,
    isShipping: false,
  },
  sort: "price-lowest",
};

export const filteredProductsSlice = createSlice({
  name: "filtered_products",
  initialState,
  reducers: {
    loadProducts: (state, action) => {
      state.products = action.payload.allProducts;
      const maxPrice = Math.max(...state.products.map((item) => item.price));
      state.filter.max_price = maxPrice;
      state.filter.price = maxPrice;
    },
    updateFilter: (state, action) => {
      if (action.payload.name === "category") {
        state.filter.category = action.payload.value;
      }
      if (action.payload.name === "company") {
        state.filter.company = action.payload.value;
      }
      if (action.payload.name === "color") {
        state.filter.color = action.payload.value;
      }
      if (action.payload.name === "shipping") {
        let value = action.payload.value;
        if (value === "true") {
          state.filter.isShipping = false;
        } else {
          state.filter.isShipping = true;
        }
      }
      if (action.payload.name === "price") {
        state.filter.price = action.payload.value;
      }
    },
    getFilterProducts: (state, action) => {
      const { products } = state;
      const { category, color, company, price, isShipping } = state.filter;
      let tempProducts = [...products];

      if (category !== "all") {
        tempProducts = tempProducts.filter(
          (item) => item.category === category
        );
      }
      if (company !== "all") {
        tempProducts = tempProducts.filter((item) => item.company === company);
      }
      if (color !== "all") {
        tempProducts = tempProducts.filter((item) => {
          return item.colors.some((itemColor) => itemColor === color);
        });
      }
      if (price) {
        tempProducts = tempProducts.filter((item) => item.price <= price);
      }
      if (isShipping) {
        tempProducts = tempProducts.filter((item) => item.shipping === true);
      }
      state.filtered_products = tempProducts;
    },
    updateSortFilter: (state, action) => {
      const value = action.payload;
      let tempProducts = [...state.filtered_products];
      if (value === "a-z") {
        tempProducts = state.filtered_products.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }
      if (value === "z-a") {
        tempProducts = state.filtered_products.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
      if (value === "lowest-price") {
        tempProducts = state.filtered_products.sort(
          (a, b) => a.price - b.price
        );
      }
      if (value === "highest-price") {
        tempProducts = state.filtered_products.sort(
          (a, b) => b.price - a.price
        );
      }
      state.filtered_products = tempProducts;
    },
    resetFilter: (state, action) => {
      const maxPrice = state.filter.max_price;
      console.log(maxPrice);
      state.filter = {
        ...state.filter,
        category: "all",
        color: "all",
        company: "all",
        isShipping: false,
        price: maxPrice,
        max_price: maxPrice,
      };
      state.filtered_products = state.products;
    },
  },
});

export const {
  loadProducts,
  updateFilter,
  getFilterProducts,
  updateSortFilter,
  resetFilter,
} = filteredProductsSlice.actions;

export default filteredProductsSlice.reducer;
