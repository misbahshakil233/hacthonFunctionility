"use client";

import { useSearchParams } from "next/navigation";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount");
  const products = JSON.parse(searchParams.get("products") || "[]");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-yellow-50 to-red-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md text-center">
        <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800">🎉 Payment Successful!</h1>
        <p className="text-gray-600 mt-2">Thank you for your purchase! 🎂</p>
        
        <div className="mt-4 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">Products Purchased:</h2>
          <ul className="mt-2 text-gray-600">
            {products.length > 0 ? (
              products.map((product: string, index: number) => (
                <li key={index} className="py-1">🍰 {product}</li>
              ))
            ) : (
              <p className="text-gray-500">No products listed.</p>
            )}
          </ul>
          <p className="mt-3 text-lg font-bold text-gray-700">Total Paid: <span className="text-green-500">${amount}</span></p>
        </div>

        <Link href="/" className="mt-6 inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300">
          Back to Home 🏠
        </Link>
      </div>
    </div>
  );
}
