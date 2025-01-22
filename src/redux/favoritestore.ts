"use client"
import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../redux/favoritesSlice";

const store = configureStore({
  reducer: {
    Favourite: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;