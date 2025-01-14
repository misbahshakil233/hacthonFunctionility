import { client } from '@/sanity/lib/client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface IProduct {
  _id: string;
  name: string;
  price: string;
  discountPercentage: string;
  tags: string;
  imageUrl: string;
}

const Page = async () => {
  // Fetch data
  const query: IProduct[] = await client.fetch(
    `*[_type == "product"]{
      _id,
      name,
      price,
      discountPercentage,
      tags,
      "imageUrl": image.asset->url
    }`
  );

  // Render
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Product Showcase</h1>
      {query.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {query.map((item: IProduct) => (
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
