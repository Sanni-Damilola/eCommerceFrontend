import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

interface userData {
  name: string;
  email: string;
  password: string;
}

interface cartData {
  title: string;
  desc: string;
  price: string;
  category: string;
  _id: string;
  cartQuantiy: number;
}

const initialState = {
  currentUser: {} as userData | null,
  cart: [] as Array<cartData>,
  totalPrice: 0,
  totalQuantity: 0,
};

const ReduxState = createSlice({
  name: "second",
  initialState,
  reducers: {
    loginUser: (state, { payload }: PayloadAction<userData>) => {
      state.currentUser = payload;
    },
    logOut: (state) => {
      state.currentUser = null;
    },
  },
});

export const { loginUser } = ReduxState.actions;

export default ReduxState.reducer;
