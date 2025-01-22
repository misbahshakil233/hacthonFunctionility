import React from 'react';
import Image from 'next/image';
const Cart = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      {/* Heading */}
      <p className="text-cyan-600 font-semibold">Practice Advice</p>
      <h1 className="text-3xl font-semibold text-center mb-8">Feature Post</h1>
      <p className="text-gray-500">
        Problems trying to resolve the conflict between <br></br>
        the two major realms of Classical physics: Newtonian mechanics.
      </p>

      {/* Cart Item */}
      <div className="flex justify-center items-center mt-8">
        <div className="text-center">
        <Image 
  src="/ost.png" 
  alt="OST Item" 
  width={8000}
  height={500} // Dynamic width
  className="object-cover w-full h-auto rounded-lg shadow-lg mb-4"
/>
        </div>
      </div>
    </div>
  );
};

export default Cart;
