"use client";

import Image from "next/image";

const Classic = () => {
  return (
    <section className="relative h-screen w-full bg-[#23856D]">
      {/* Hero Image */}
      <div className="relative h-full w-full flex justify-end">
        <Image
          src="/clasic.png" // Hero image path
          alt="Hero Image"
          width={300}
          height={300}
          className="object-cover w-auto h-full absolute right-6 sm:right-10 md:right-40 lg:right-60" // Adjusted position for all screens
        />

        {/* Text Overlay */}
        <div className="absolute top-1/2 left-4 sm:left-10 md:left-24 lg:left-48 transform -translate-y-1/2 text-white px-4 md:px-6 max-w-xs sm:max-w-sm md:max-w-lg">
          {/* Summer 2020 Text */}
          <h1 className="text-xs sm:text-sm md:text-base lg:text-xl font-semibold mb-2 md:mb-4">
            SUMMER 2020
          </h1>

          {/* Vita Classic Product Text */}
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6">
            Vita Classic <br /> Product
          </p>

          {/* Small Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8">
            We know how large objects will act,
            <br />
            but things on a small scale.
          </p>

          {/* Price and Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-base sm:text-lg md:text-xl font-bold">$16.48</p>
            <button className="bg-[#2DC071] text-white py-2 px-4 sm:py-2 sm:px-6 md:py-3 md:px-8 hover:bg-green-400 transition duration-300 text-xs sm:text-sm md:text-base lg:text-lg">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classic;
