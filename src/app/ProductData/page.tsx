"use client";
import { client } from '@/sanity/lib/client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from "react-redux";
import { add } from "../../redux/favoritesSlice";
import { FaHeart } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

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
  const [searchQuery, setSearchQuery] = useState(""); 
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8); // You can change this number to control items per page
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
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
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToFavorites = (product: IProduct) => {
    dispatch(add(product));

    toast.success(`${product.name} added to favorites! ❤️`, {
      duration: 3000,
      position: 'top-right',
      style: {
        background: "#4CAF50",
        color: "#fff",
        fontWeight: "bold"
      }
    });
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (Array.isArray(product.tags) ? product.tags.join(" ").toLowerCase().includes(searchQuery.toLowerCase()) : product.tags.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <Toaster />
      <h1 className="text-4xl font-bold text-center mb-10">Product Showcase</h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {currentProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentProducts.map((item: IProduct) => (
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
                  <button 
                    onClick={() => handleAddToFavorites(item)} 
                    className="bg-purple-400 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-red-600 transition-colors"
                  >
                    <FaHeart className="text-white" />
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

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6">
        <button 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1} 
          className="px-4 py-2 mx-2 bg-gray-500 text-white rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
        <button 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages} 
          className="px-4 py-2 mx-2 bg-gray-500 text-white rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Page;
