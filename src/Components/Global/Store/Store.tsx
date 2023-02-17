import { configureStore } from "@reduxjs/toolkit";
import myReducer from "../ReduxState/ReduxState";

const store = configureStore({
  reducer: {
    myReducer,
  },
});
