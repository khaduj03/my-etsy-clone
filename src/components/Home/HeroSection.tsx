import React from "react";
import ImageCard from "../ImageCard";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <div className="grid grid-cols-6 w-full gap-8  container mx-auto">
        {/* Top Section */}
        <section className="col-span-4 h-96 bg-pink-100 rounded-lg shadow-md overflow-hidden flex">
          {/* Text content */}
          <div className="w-1/2 flex flex-col justify-center items-center space-y-4 p-6 h-full">
            <h2 className="text-5xl text-center">Made just for you!</h2>
            <p className="text-xl font-semibold max-w-52 text-center ">
              Custom pieces you {"won't"} find elsewhere
            </p>
            <button className="bg-black text-white px-5 py-4 rounded-full text-sm font-semibold hover:bg-gray-800 transition">
              Personalize Now
            </button>
          </div>

          {/* Image */}
          <div className="w-3/4 h-full relative clip-left-bite overflow-hidden">
            <Image
              src="https://i.etsystatic.com/ij/01cfb3/6879478275/ij_fullxfull.6879478275_c9pfl6yr.jpg?version=0"
              alt="Custom product"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </section>

        {/* Bottom Section */}
        <section className="col-span-2 relative rounded-lg shadow-md overflow-hidden">
          <ImageCard
            image="https://i.etsystatic.com/48729527/r/il/803894/5640236301/il_800x800.5640236301_pqji.jpg"
            title="Wedding & Engagement"
            subtitle="Shop Now"
            width="w-full"
            height="h-full"
          />
        </section>
      </div>
    </>
  );
}
