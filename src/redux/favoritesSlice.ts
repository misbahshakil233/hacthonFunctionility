// In your redux slice (favoritesSlice.ts)
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IProduct {
  _id: string;
  name: string;
  price: string;
  discountPercentage: string;
  tags: string;
  imageUrl: string;
}

interface FavoritesState {
  favourites: IProduct[];
}

const initialState: FavoritesState = {
  favourites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IProduct>) => {
      state.favourites.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      state.favourites = state.favourites.filter(product => product._id !== action.payload);
    },
  },
});

export const { add, remove } = favoritesSlice.actions;

export default favoritesSlice.reducer;
