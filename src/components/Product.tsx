import React from "react";
import Image from "next/image";
import Link from "next/link";

const Product = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16">
      {/* Product Text Section */}
      <div className="mb-8">
        <div className="text-gray-400 text-xl sm:text-2xl">Featured Product</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-black my-4">Bestseller Product</h1>
        <p className="text-gray-400 text-base sm:text-lg">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Images Row Section 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
        {/* Product 1 */}
        <Link href="/moreproduct">
          <div className="flex flex-col items-center">
            <Image
              src="/product-1.png"
              alt="Product Image 1"
              width={200}
              height={200}
              className="object-cover"
            />
            <p className="mt-4 text-black text-sm">Graphic Designer</p>
            <div className="text-gray-500 text-sm">English Department</div>
            <div className="flex items-center mt-4">
              <div className="text-gray-400 text-lg mr-4">$16.48</div>
              <div className="text-green-500 text-lg">$6.48</div>
            </div>
            {/* Colored Circles */}
            <div className="flex space-x-2 mt-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-700 rounded-full"></div>
              <div className="w-4 h-4 bg-red-400 rounded-full"></div>
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
          </div>
        </Link>

        {/* Product 2 */}
        <Link href="/moreproduct">
          <div className="flex flex-col items-center">
            <Image
              src="/product-2.png"
              alt="Product Image 2"
              width={200}
              height={200}
              className="object-cover"
            />
            <p className="mt-4 text-black text-sm">Graphic Designer</p>
            <div className="text-gray-500 text-sm">English Department</div>
            <div className="flex items-center mt-4">
              <div className="text-gray-400 text-lg mr-4">$16.48</div>
              <div className="text-green-500 text-lg">$6.48</div>
            </div>
            {/* Colored Circles */}
            <div className="flex space-x-2 mt-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-700 rounded-full"></div>
              <div className="w-4 h-4 bg-red-400 rounded-full"></div>
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
          </div>
        </Link>

        {/* Product 3 */}
        <Link href="/moreproduct">
          <div className="flex flex-col items-center">
            <Image
              src="/product-3.png"
              alt="Product Image 3"
              width={200}
              height={200}
              className="object-cover"
            />
            <p className="mt-4 text-black text-sm">Graphic Designer</p>
            <div className="text-gray-500 text-sm">English Department</div>
            <div className="flex items-center mt-4">
              <div className="text-gray-400 text-lg mr-4">$16.48</div>
              <div className="text-green-500 text-lg">$6.48</div>
            </div>
            {/* Colored Circles */}
            <div className="flex space-x-2 mt-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-700 rounded-full"></div>
              <div className="w-4 h-4 bg-red-400 rounded-full"></div>
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
          </div>
        </Link>

        {/* Product 4 */}
        <Link href="/moreproduct">
          <div className="flex flex-col items-center">
            <Image
              src="/product-4.png"
              alt="Product Image 4"
              width={200}
              height={200}
              className="object-cover"
            />
            <p className="mt-4 text-black text-sm">Graphic Designer</p>
            <div className="text-gray-500 text-sm">English Department</div>
            <div className="flex items-center mt-4">
              <div className="text-gray-400 text-lg mr-4">$16.48</div>
              <div className="text-green-500 text-lg">$6.48</div>
            </div>
            {/* Colored Circles */}
            <div className="flex space-x-2 mt-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-700 rounded-full"></div>
              <div className="w-4 h-4 bg-red-400 rounded-full"></div>
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
          </div>
        </Link>
      </div>

      {/* Images Row Section 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {/* Product 5 */}
        <Link href="/moreproduct">
          <div className="flex flex-col items-center">
            <Image
              src="/product-5.png"
              alt="Product Image 5"
              width={200}
              height={200}
              className="object-cover"
            />
            <p className="mt-4 text-black text-sm">Graphic Designer</p>
            <div className="text-gray-500 text-sm">English Department</div>
            <div className="flex items-center mt-4">
              <div className="text-gray-400 text-lg mr-4">$16.48</div>
              <div className="text-green-500 text-lg">$6.48</div>
            </div>
            {/* Colored Circles */}
            <div className="flex space-x-2 mt-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-700 rounded-full"></div>
              <div className="w-4 h-4 bg-red-400 rounded-full"></div>
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
          </div>
        </Link>

        {/* Product 6 */}
        <Link href="/moreproduct">
          <div className="flex flex-col items-center">
            <Image
              src="/product-6.png"
              alt="Product Image 6"
              width={200}
              height={200}
              className="object-cover"
            />
            <p className="mt-4 text-black text-sm">Graphic Designer</p>
            <div className="text-gray-500 text-sm">English Department</div>
            <div className="flex items-center mt-4">
              <div className="text-gray-400 text-lg mr-4">$16.48</div>
              <div className="text-green-500 text-lg">$6.48</div>
            </div>
            {/* Colored Circles */}
            <div className="flex space-x-2 mt-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-700 rounded-full"></div>
              <div className="w-4 h-4 bg-red-400 rounded-full"></div>
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
          </div>
        </Link>

        {/* Product 7 */}
        <Link href="/moreproduct">
          <div className="flex flex-col items-center">
            <Image
              src="/roduct-8.png"
              alt="Product Image 7"
              width={200}
              height={200}
              className="object-cover"
            />
            <p className="mt-4 text-black text-sm">Graphic Designer</p>
            <div className="text-gray-500 text-sm">English Department</div>
            <div className="flex items-center mt-4">
              <div className="text-gray-400 text-lg mr-4">$16.48</div>
              <div className="text-green-500 text-lg">$6.48</div>
            </div>
            {/* Colored Circles */}
            <div className="flex space-x-2 mt-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-700 rounded-full"></div>
              <div className="w-4 h-4 bg-red-400 rounded-full"></div>
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
          </div>
        </Link>

        {/* Product 8 */}
        <Link href="/moreproduct">
          <div className="flex flex-col items-center">
            <Image
              src="/product-8.png"
              alt="Product Image 8"
              width={200}
              height={200}
              className="object-cover"
            />
            <p className="mt-4 text-black text-sm">Graphic Designer</p>
            <div className="text-gray-500 text-sm">English Department</div>
            <div className="flex items-center mt-4">
              <div className="text-gray-400 text-lg mr-4">$16.48</div>
              <div className="text-green-500 text-lg">$6.48</div>
            </div>
            {/* Colored Circles */}
            <div className="flex space-x-2 mt-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-700 rounded-full"></div>
              <div className="w-4 h-4 bg-red-400 rounded-full"></div>
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Product;
