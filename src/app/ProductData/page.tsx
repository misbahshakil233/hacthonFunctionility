"use client";
import { client } from '@/sanity/lib/client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from "react-redux";
import { add } from "../../redux/favoritesSlice";
import { FaHeart } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast'; // 🔥 Import toast

interface IProduct {
  _id: string;
  name: string;
  price: string;
  discountPercentage: string;
  tags: string;
  imageUrl: string;
}

const Page = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const data: IProduct[] = await client.fetch(
        `*[_type == "product"]{
          _id,
          name,
          price,
          discountPercentage,
          tags,
          "imageUrl": image.asset->url
        }`
      );
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleAddToFavorites = (product: IProduct) => {
    dispatch(add(product));
    
    // 🎉 Toast Notification
    toast.success(`${product.name} added to favorites! ❤️`, {
      duration: 3000, // Time in ms (3 sec)
      position: 'top-right', // Position of toast
      style: {
        background: "#4CAF50",
        color: "#fff",
        fontWeight: "bold"
      }
    });
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <Toaster /> {/* ✅ Toast component added */}
      <h1 className="text-4xl font-bold text-center mb-10">Product Showcase</h1>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item: IProduct) => (
            <div
              key={item._id}
              className="border rounded-lg shadow-lg p-4 hover:scale-105 transition-transform"
            >
              <div className="relative w-full h-48">
                {item.imageUrl && (
                   <Link href={`/ProductData/${item._id}`}>
                    <Image
                      src={item.imageUrl}
                      alt={item.name || 'Product image'}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </Link>
                )}
              </div>
              <div className="mt-4">
                <h2 className="text-lg font-bold truncate">{item.name}</h2>
                <p className="text-sm text-gray-500">ID: {item._id}</p>
                <p className="text-sm text-gray-500">Tags: {item.tags}</p>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-xl font-semibold text-gray-800">${item.price}</p>
                  <Link href={`/ProductData/${item._id}`}>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                      View
                    </button>
                  </Link>
                  {/* Favourite Button */}
                  <button 
                    onClick={() => handleAddToFavorites(item)} 
                    className="bg-purple-400 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-red-600 transition-colors"
                  >
                    <FaHeart className="text-white" /> {/* ❤️ Heart Icon */}
                    Favourite
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}
    </div>
  );
};

export default Page;
