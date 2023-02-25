import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

interface UserData {
  name: string;
  email: string;
  password: string;
  _id: string;
}

interface CartData {
  title: string;
  desc: string;
  price: number;
  category: string;
  _id: string;
  cartQuantity: number;
}

const initialState = {
  currentUser: {} as UserData | null,
  cart: [] as Array<CartData>,
  totalPrice: 0,
  totalQuantity: 0,
  clearCart: [],
};

const ReduxState = createSlice({
  name: "ecomerce",
  initialState,
  reducers: {
    loginUser: (state, { payload }: PayloadAction<UserData>) => {
      state.currentUser = payload;
    },

    logoutUser: (state) => {
      state.currentUser = null;
    },

    addToCart: (state, { payload }: PayloadAction<CartData>) => {
      const check = state.cart.findIndex((el) => el._id === payload._id);

      if (check >= 0) {
        state.cart[check].cartQuantity += 1;
      } else {
        state.cart.push({
          ...payload,
          cartQuantity: 1,
        });
      }
      //
      state.totalQuantity += 1;
    },

    removeFromCart: (state, { payload }: PayloadAction<CartData>) => {
      const check = state.cart.findIndex((el) => el._id === payload._id);

      if (state.cart[check].cartQuantity > 1) {
        state.cart[check].cartQuantity -= 1;
      } else {
        state.cart = state.cart.filter((el) => el._id !== payload._id);
      }

      state.totalQuantity -= 1;
    },

    clearAllCart: (state) => {
      state.cart = state.clearCart; // clear cart
      state.totalQuantity = 0; // clear totalQuanity
    },
  },
});

export const {
  loginUser,
  logoutUser,
  addToCart,
  removeFromCart,
  clearAllCart,
} = ReduxState.actions;

export default ReduxState.reducer;
