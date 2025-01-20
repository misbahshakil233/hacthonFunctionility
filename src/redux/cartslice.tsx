"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    _id: string;
    name: string;
    price: string;
    discountPercentage: string;
    tags: string;
    imageUrl: string;
}

const cartSlice = createSlice({
  name: "Cart",
  initialState: [] as CartItem[],
  reducers: {
    add(state, action: PayloadAction<CartItem>) {
      state.push(action.payload);
    },
    remove(state, action: PayloadAction<string>) { // Change number to string
      return state.filter((item) => item._id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
