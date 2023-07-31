import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  products: [],
  total_amount: 0,
  total_price: 0,
};

const CartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    getCartLocalStorage: (state, action) => {
      if (action.payload) {
        state.products = [...action.payload];
      }
    },
    addCartItem: (state, action) => {
      const { id, amount, images, productColor, price, stock, name } =
        action.payload;
      let tempProduct = state.products.find(
        (product) => product.id === id + productColor
      );

      if (tempProduct) {
        console.log(tempProduct.amount, tempProduct.stock);
        if (tempProduct.amount >= tempProduct.stock) {
          tempProduct.amount = tempProduct.stock;
          toast.warning("reached maximum limit for this product");
        } else {
          tempProduct.amount += amount;
          toast.success("Add Items");
        }
      } else {
        const newProduct = {
          id: id + productColor,
          name: name,
          color: productColor,
          amount: amount,
          image: images[0].url,
          price: price,
          stock: stock,
        };
        toast.success("Add Items");

        state.products = [...state.products, newProduct];
      }
    },
    clearCartItem: (state, action) => {
      state.products = [];
    },
    toggleAmount: (state, action) => {
      const { id, value } = action.payload;
      let tempProduct = state.products.find((product) => product.id === id);
      if (value === "decrease") {
        tempProduct.amount -= 1;
      }
      if (value === "increase") {
        if (tempProduct.amount === tempProduct.stock) {
          tempProduct.amount = tempProduct.stock;
        } else {
          tempProduct.amount += 1;
        }
      }
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      state.products = state.products.filter((product) => product.id !== id);
    },
    totalAmount: (state, action) => {
      state.total_amount = state.products.reduce((total, product) => {
        return (total += product.amount);
      }, 0);
    },
    totalPrice: (state, action) => {
      state.total_price = state.products.reduce((total, product) => {
        return (total += product.price * product.amount);
      }, 0);
    },
  },
});

export default CartSlice.reducer;
export const {
  addCartItem,
  toggleAmount,
  removeItem,
  totalAmount,
  totalPrice,
  getCartLocalStorage,
} = CartSlice.actions;

// getCartitem:
// const { id, productColor, quantity, images, name, price } =
//   action.payload;
// let tempId = 0;
// const isAvailable = state.products.some((item) => {
//   if (item.id === id && item.productColor === productColor) {
//     tempId = id;
//     return item;
//   }
// });
// // Check Item is available in cart?
// //if Not
// if (!isAvailable) {
//   let tempProduct = { ...action.payload, amount: quantity };
//   state.products = [...state.products, tempProduct];
//   toast.success("Added Items !");
// }
// // if already had
// if (isAvailable) {
//   state.products.forEach((item) => {
//     if (item.id === tempId && item.productColor === productColor) {
//       item.amount += quantity;
//       toast.success("Added Items !");
//     }
//   });
// }
