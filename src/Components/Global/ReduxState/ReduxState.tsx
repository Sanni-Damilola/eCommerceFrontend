import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

interface userData {
  name: string;
  email: string;
  password: string;
}

const initialState = {
  currentUser: {} || null,
};

const ReduxState = createSlice({
  name: "second",
  initialState,
  reducers: {
    loginUser: (state, { payload }: PayloadAction<userData>) => {
      state.currentUser = payload;
    },
  },
});

export const { loginUser } = ReduxState.actions;

export default ReduxState.reducer;
