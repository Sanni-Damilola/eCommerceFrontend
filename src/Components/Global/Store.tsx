import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import myReducer from "./ReduxState";
import { TypedUseSelectorHook, useSelector } from "react-redux/es/exports";

const persistConfig = {
  key: "ecomerece06",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, myReducer);

// export const store = configureStore({
// 	reducer: persistedReducer,
// 	middleware: (getDefaultMiddleware) =>
// 		getDefaultMiddleware({
// 			serializableCheck: {
// 				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// 			},
// 		}),
// });

export const store = configureStore({
  reducer: {
    myReducer,
  },
});

// define your despatch and selector

export const UseAppDispach: () => typeof store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
