"use client";
import React from "react";
import { remove } from "@/redux/favoritesSlice"; // Correct action import
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";

interface FavouriteItem {
  _id: string;
  name: string;
  price: string;
  discountPercentage: string;
  tags: string;
  imageUrl: string;
}

const Favouritepage: React.FC = () => {
  const dispatch = useDispatch();

  // Corrected the state reference to 'favourite' and variable name to 'favouriteItems'
  const favouriteItems = useSelector((state: RootState) => state.favourite.favourites); // Fetching 'favourites' array from state

  const handleRemove = (_id: string) => {
    dispatch(remove(_id)); // Remove item from favourites
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h3 className="text-3xl font-bold text-center mb-8">Your Favourite</h3>

      {/* Agar favourite list empty ho to ye message show hoga */}
      {favouriteItems.length === 0 ? (
        <div className="text-center text-gray-600 text-lg mt-10">
          <p className="font-semibold">No items in the favourite list.</p>
          <p>Please add items first.</p>
        </div>
      ) : (
        <div>
          <div className="space-y-6">
            {favouriteItems.map((item: FavouriteItem) => (
              <div
                key={item._id}
                className="flex items-center bg-white shadow-md rounded-lg p-4"
              >
                {/* Image Section */}
                <div className="flex-shrink-0">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    height={150}
                    width={150}
                    className="rounded-md"
                  />
                </div>

                {/* Content Section */}
                <div className="ml-4 flex-grow">
                  <h5 className="text-lg font-semibold text-gray-800">{item.name}</h5>
                  <h5 className="text-lg font-medium text-gray-600 mt-2">${item.price}</h5>
                </div>

                {/* Button Section */}
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                  onClick={() => handleRemove(item._id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Favouritepage;
