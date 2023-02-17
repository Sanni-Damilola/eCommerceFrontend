import { configureStore } from "@reduxjs/toolkit";
import myReducer from "../ReduxState/ReduxState";

export const store = configureStore({
  reducer: {
    myReducer,
  },
});
