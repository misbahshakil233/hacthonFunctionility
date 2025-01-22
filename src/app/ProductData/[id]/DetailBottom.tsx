import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DetailBottom = () => {
  return (
    <div>
      {/* Introductory Paragraph */}
      <p className="text-lg text-[#737373] leading-8 mb-8 text-center justify-center font-semibold mt-20">
        Problems trying to resolve the conflict between <br />
        the two major realms of Classical physics.
      </p>

      {/* Grid with 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
        {/* Column 1 (Image) */}
        <div className="flex justify-center items-center">
          <Image
            src="/slash.png"
            alt="Physics Illustration"
            width={300}
            height={300}
            className="w-full max-w-xs rounded-lg shadow-lg"
          />
        </div>
        {/* Column 2 */}
        <div>
          <h6 className="text-base font-bold mb-4">
            The quick fox jumps over the lazy dog
          </h6>
          <p className="text-sm text-gray-600 leading-6 mb-4">
            Met minim Mollie non desert Alamo est sit cliquey dolor.
            <br />
            Do met sent. RELIT official consequent door ENIM RELIT Mollie.
            <br />
            Excitation venial consequent sent nostrum met.
          </p>
          <p className="text-sm text-gray-600 leading-6 mb-4">
            Met minim Mollie non desert Alamo est sit cliquey dolor.
            <br />
            Do met sent. RELIT official consequent door ENIM RELIT Mollie.
            <br />
            Excitation venial consequent sent nostrum met.
          </p>
          <p className="text-sm text-gray-600 leading-6">
            Met minim Mollie non desert Alamo est sit cliquey dolor.
            <br />
            Do met sent. RELIT official consequent door ENIM RELIT Mollie.
            <br />
            Excitation venial consequent sent nostrum met.
          </p>
        </div>
        {/* Column 3 */}
        <div>
          <h6 className="text-base font-bold mb-4">
            The quick fox jumps over the lazy dog
          </h6>
          <p className="text-sm text-gray-600 leading-6 mb-4">
            Met minim Mollie non desert Alamo est sit cliquey dolor.
            <br />
            Do met sent. RELIT official consequent door ENIM RELIT Mollie.
            <br />
            Excitation venial consequent sent nostrum met.
          </p>
          <p className="text-sm text-gray-600 leading-6 mb-4">
            Met minim Mollie non desert Alamo est sit cliquey dolor.
            <br />
            Do met sent. RELIT official consequent door ENIM RELIT Mollie.
            <br />
            Excitation venial consequent sent nostrum met.
          </p>
          <p className="text-sm text-gray-600 leading-6">
            Met minim Mollie non desert Alamo est sit cliquey dolor.
            <br />
            Do met sent. RELIT official consequent door ENIM RELIT Mollie.
            <br />
            Excitation venial consequent sent nostrum met.
          </p>
        </div>
      </div>

      {/* Bestseller Products Section */}
      <div className="flex flex-col items-center justify-center text-center py-16 bg-[#FAFAFA]">
        <h1 className="text-2xl sm:text-4xl font-bold text-black my-4">
          BESTSELLER PRODUCTS
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[...Array(8)].map((_, index) => (
            <Link href="/moreproduct" key={index}>
              <div className="flex flex-col items-center">
                <Image
                  src={`/e${(index % 4) + 1}.png`}
                  alt={`Product Image ${index + 1}`}
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
              </div>
            </Link>
          ))}
        </div>
      </div>


      
    </div>
  );
};

export default DetailBottom;
