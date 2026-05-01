import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import counterReducer from "../features/counter/counterSlice.js";
import userReducer from "../features/user/userSlice.js";
import counterApiMiddlewear from "../features/middlewear/counterApiMiddlewar.js";

//  COMBINE REDUCERS
const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

//  PERSIST CONFIG
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["counter", "user"], //  persist both slices
};

//  WRAP REDUCER WITH PERSIST
const persistedReducer = persistReducer(persistConfig, rootReducer);

// CONFIGURE STORE
export const store = configureStore({
  reducer: persistedReducer, //  use persistedReducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(counterApiMiddlewear),
});

//  CREATE PERSISTOR
export const persistor = persistStore(store);
