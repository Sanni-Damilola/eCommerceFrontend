import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import myReducer from "../ReduxState/ReduxState";

export const store = configureStore({
  reducer: {
    myReducer,
  },
});

export const storeDispatch: () => typeof store.dispatch = useDispatch;
