// pages/product/[id]/page.tsx
"use client";

import { client } from '@/sanity/lib/client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface IProduct {
  _id: string;
  name: string;
  price: string;
  discountPercentage: string;
  tags: string;
  imageUrl: string;
  description: string;
}

const ProductPage = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  // Fetch product data on the client side
  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct: IProduct[] = await client.fetch(
        `*[_type == "product" && _id == "${params.id}"]{
          _id,
          name,
          price,
          discountPercentage,
          tags,
          "imageUrl": image.asset->url,
          description
        }`
      );
      setProduct(fetchedProduct[0]);
    };

    fetchProduct();
  }, [params.id]);

  if (!product) {
    return <div>Loading...</div>; // Loading state
  }

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">{product.name}</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Image section */}
        <div className="relative lg:w-1/2 mb-6 lg:mb-0">
          <Image
            src={product.imageUrl}
            alt={product.name || 'Product image'}
            height={500}
            width={500}
            className="rounded-md"
          />
        </div>
        {/* Product details section */}
        <div className="relative lg:w-1/2 mb-6 lg:mb-0">
          <p className="text-lg font-semibold mb-2">Price: ${product.price}</p>
          <p className="text-sm text-gray-500 mb-2">Discount: {product.discountPercentage}%</p>
          <p className="text-sm text-gray-500 mb-2 font-bold">Tags: {product.tags}</p>
          <p className="text-sm text-gray-700 mb-4">{product.description}</p>

          {/* Size Selection */}
          <div className="mb-4">
            <p className="font-semibold mb-2">Select Size:</p>
            <div className="flex gap-4">
              {['S', 'M', 'L'].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-md border-2 ${
                    selectedSize === size ? 'border-blue-500 bg-blue-100' : 'border-gray-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            {selectedSize && <p className="mt-2 text-gray-700">Selected Size: {selectedSize}</p>}
          </div>

          {/* Color Selection */}
          <div className="mb-4">
            <p className="font-semibold mb-2">Select Color:</p>
            <div className="flex gap-4">
              {['red', 'green', 'blue'].map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 rounded-full border-2 ${
                    selectedColor === color ? 'border-blue-500' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
            {selectedColor && <p className="mt-2 text-gray-700">Selected Color: {selectedColor}</p>}
          </div>

          {/* Quantity Selection */}
          <div className="mb-4">
            <p className="font-semibold mb-2">Quantity:</p>
            <div className="flex items-center gap-4">
              <button
                onClick={decreaseQuantity}
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
              >
                +
              </button>
            </div>
          </div>

          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors">
            Add to Cart
          </button>

          {/* Horizontal Divider */}
          <hr className="my-6 border-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
