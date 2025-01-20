"use client";
import React from "react";
import { remove } from "@/redux/cartslice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";

interface CartItem {
  _id: string;
  name: string;
  price: string;
  discountPercentage: string;
  tags: string;
  imageUrl: string;
}

const Cartpage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);

  // Total bill calculate karna
  const totalBill = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

  const handleRemove = (_id: string) => {
    dispatch(remove(_id));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h3 className="text-3xl font-bold text-center mb-8">Your Cart</h3>

      {/* Agar cart empty ho to ye message show hoga */}
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600 text-lg mt-10">
          <p className="font-semibold">No items in the cart.</p>
          <p>Please add items first.</p>
        </div>
      ) : (
        <div>
          <div className="space-y-6">
            {cartItems.map((item: CartItem) => (
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

          {/* Total Bill Section */}
          <div className="mt-10 p-6 bg-white shadow-lg rounded-lg text-center">
            <h4 className="text-2xl font-bold text-gray-800">Total Bill: ${totalBill.toFixed(2)}</h4>
            <button
              className="mt-4 bg-green-500 text-white px-6 py-3 rounded text-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cartpage;
