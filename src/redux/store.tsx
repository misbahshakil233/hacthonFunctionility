"use client";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartslice";
import favoritesReducer from "../redux/favoritesSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favourite: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
