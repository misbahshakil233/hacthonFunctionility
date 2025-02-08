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

// ✅ Pehle empty array rakho, direct localStorage call mat karo
const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    setCart(state, action: PayloadAction<CartItem[]>) {
      return action.payload; // ✅ Ye pura cart replace karega
    },
    add(state, action: PayloadAction<CartItem>) {
      const updatedCart = [...state, action.payload];
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // ✅ LocalStorage update karo
      return updatedCart;
    },
    remove(state, action: PayloadAction<string>) {
      const updatedCart = state.filter((item) => item._id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // ✅ LocalStorage update karo
      return updatedCart;
    },
  },
});

export const { setCart, add, remove } = cartSlice.actions;
export default cartSlice.reducer;
