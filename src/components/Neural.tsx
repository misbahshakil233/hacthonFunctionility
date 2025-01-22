"use client";

import Image from "next/image";

const Neural = () => {
  return (
    <section className="relative h-screen w-full bg-white">
      {/* Hero Section */}
      <div className="flex flex-col items-center md:flex-row-reverse justify-between h-full w-full">
        {/* Text Section (on top for small screens) */}
        <div className="relative w-full md:w-1/2 text-black px-6 sm:px-10 md:pl-16 md:pr-10">
          {/* Subheading */}
          <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 md:mb-4 text-gray-400 text-center md:text-left">
            SUMMER 2020
          </h1>

          {/* Heading */}
          <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 text-center md:text-left">
            Part of the Neural <br /> Universe
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-gray-500 font-semibold text-center md:text-left">
            We know how large objects will act,
            <br />
            but things on a small scale.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <button className="bg-green-500 text-white py-2 px-6 sm:py-3 sm:px-8 hover:bg-green-400 transition duration-300 text-sm sm:text-base md:text-lg">
              BUY NOW
            </button>
            <button className="bg-white text-green-600 py-2 px-6 sm:py-3 sm:px-8 hover:bg-green-500 hover:text-white border-2 border-green-600 transition duration-300 text-sm sm:text-base md:text-lg">
              READ MORE
            </button>
          </div>
        </div>

        {/* Image Section (below text for small screens) */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end md:pl-10">
          <Image
            src="/neyral.png" // Hero image path
            alt="Hero Image"
            width={700}
            height={500}
            className="object-contain max-w-full h-auto" // Maintains aspect ratio
          />
        </div>
      </div>
    </section>
  );
};

export default Neural;
