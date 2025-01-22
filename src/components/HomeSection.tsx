"use client";

import Image from "next/image";

const HomeSection = () => {
  return (
    <section className="relative h-screen w-full bg-gray-100">
      {/* Hero Image */}
      <div className="relative h-full w-full">
        <Image
          src="/hero.jpg" // Hero image path
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          priority
        />

        {/* Text Overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center md:left-80 md:text-left text-white px-4 md:px-6 max-w-lg">
          {/* Summer 2020 Text */}
          <h1 className="text-xs font-semibold mb-2 md:mb-4">SUMMER 2020</h1>

          {/* New Collection Text */}
          <p className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6">
            NEW COLLECTION
          </p>

          {/* Small Description */}
          <p className="text-sm md:text-xl mb-6 md:mb-8">
            We know how large object will act,
            <br />
            but things on a small scale.
          </p>

          {/* Button */}
          <button className="bg-green-500 text-white py-3 px-8 md:py-5 md:px-10 hover:bg-green-400 transition duration-300 text-sm md:text-lg">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
