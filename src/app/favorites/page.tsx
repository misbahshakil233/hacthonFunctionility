"use client";
import React from "react";
import { remove } from "@/redux/favoritesSlice";
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
  const favouriteItems = useSelector((state: RootState) => state.favourite.favourites);

  const handleRemove = (_id: string) => {
    dispatch(remove(_id));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h3 className="text-3xl font-bold text-center mb-8">Your Favourites</h3>

      {/* Agar favourite list empty ho to ye message show hoga */}
      {favouriteItems.length === 0 ? (
        <div className="text-center text-gray-600 text-lg mt-10">
          <p className="font-semibold">No items in the favourite list.</p>
          <p>Please add items first.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favouriteItems.map((item: FavouriteItem) => (
            <div
              key={item._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              {/* Image */}
              <Image
                src={item.imageUrl}
                alt={item.name}
                height={200}
                width={300}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-4">
                <h5 className="text-lg font-semibold text-gray-800">{item.name}</h5>
                <h5 className="text-lg font-medium text-gray-600 mt-2">${item.price}</h5>

                {/* Remove Button */}
                <button
                  className="w-full mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                  onClick={() => handleRemove(item._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favouritepage;
