import React from "react";
import ProductCard from "../Card";
import FavoriteCard from "../FavoriteCard";
import ImageCard from "../ImageCard";
import HeroSection from "./HeroSection";

const featured = [
  {
    image:
      "https://i.etsystatic.com/48729527/r/il/803894/5640236301/il_800x800.5640236301_pqji.jpg",
    title: "Handmade Crochet Hat",
  },
  {
    image:
      "https://i.etsystatic.com/48729527/r/il/803894/5640236301/il_800x800.5640236301_pqji.jpg",
    title: "Handmade Crochet Hat",
  },
  {
    image:
      "https://i.etsystatic.com/48729527/r/il/803894/5640236301/il_800x800.5640236301_pqji.jpg",
    title: "Handmade Crochet Hat",
  },
  {
    image:
      "https://i.etsystatic.com/48729527/r/il/803894/5640236301/il_800x800.5640236301_pqji.jpg",
    title: "Handmade Crochet Hat",
  },
  {
    image:
      "https://i.etsystatic.com/48729527/r/il/803894/5640236301/il_800x800.5640236301_pqji.jpg",
    title: "Handmade Crochet Hat",
  },
  {
    image:
      "https://i.etsystatic.com/48729527/r/il/803894/5640236301/il_800x800.5640236301_pqji.jpg",
    title: "Handmade Crochet Hat",
  },
  {
    image:
      "https://i.etsystatic.com/48729527/r/il/803894/5640236301/il_800x800.5640236301_pqji.jpg",
    title: "Handmade Crochet Hat",
  },
  {
    image:
      "https://i.etsystatic.com/48729527/r/il/803894/5640236301/il_800x800.5640236301_pqji.jpg",
    title: "Handmade Crochet Hat",
  },
  {
    image:
      "https://i.etsystatic.com/48729527/r/il/803894/5640236301/il_800x800.5640236301_pqji.jpg",
    title: "Handmade Crochet Hat",
  },
  {
    image:
      "https://i.etsystatic.com/48729527/r/il/803894/5640236301/il_800x800.5640236301_pqji.jpg",
    title: "Handmade Crochet Hat",
  },
];
const gifts = [
  {
    image:
      "https://i.etsystatic.com/48729527/r/il/803894/5640236301/il_800x800.5640236301_pqji.jpg",
    title: "Handmade Crochet Hat",
  },
  {
    image:
      "https://i.etsystatic.com/48729527/r/il/803894/5640236301/il_800x800.5640236301_pqji.jpg",
    title: "Handmade Crochet Hat",
  },
  {
    image:
      "https://i.etsystatic.com/48729527/r/il/803894/5640236301/il_800x800.5640236301_pqji.jpg",
    title: "Handmade Crochet Hat",
  },
];
const favoriteCard = [
  {
    image:
      "https://i.etsystatic.com/48729527/r/il/803894/5640236301/il_800x800.5640236301_pqji.jpg",
    title: "Handmade Crochet Hat",
  },
  {
    image:
      "https://i.etsystatic.com/48729527/r/il/803894/5640236301/il_800x800.5640236301_pqji.jpg",
    title: "Handmade Crochet Hat",
  },
  {
    image:
      "https://i.etsystatic.com/48729527/r/il/803894/5640236301/il_800x800.5640236301_pqji.jpg",
    title: "Handmade Crochet Hat",
  },
  {
    image:
      "https://i.etsystatic.com/48729527/r/il/803894/5640236301/il_800x800.5640236301_pqji.jpg",
    title: "Handmade Crochet Hat",
  },
  {
    image:
      "https://i.etsystatic.com/48729527/r/il/803894/5640236301/il_800x800.5640236301_pqji.jpg",
    title: "Handmade Crochet Hat",
  },
  {
    image:
      "https://i.etsystatic.com/48729527/r/il/803894/5640236301/il_800x800.5640236301_pqji.jpg",
    title: "Handmade Crochet Hat",
  },
];
export default function HomePage() {
  return (
    <div className="py-8 px-10">
      <HeroSection />
      <section className="py-5 container mx-auto">
        <h2 className="text-3xl font-semibold block py-8">
          Jump into featured interests
        </h2>
        <div className="grid grid-cols-5 gap-8">
          {featured.map((featuer, index) => (
            <ProductCard
              key={index}
              image={featuer.image}
              title={featuer.title}
            />
          ))}
        </div>
      </section>
      <section className="py-5 container mx-auto gap-5 grid-cols-4 grid">
        <div className="flex flex-col justify-center items-start">
          <div className="text-3xl font-semibold ">
            Etsy-special gifts for birthdays
          </div>
          <button className="py-4 mt-8 px-5 text-sm font-semibold bg-gray-200 rounded-full">
            Get inspidred
          </button>
        </div>
        {gifts.map((gift, index) => (
          <ImageCard
            key={index}
            image={gift.image}
            title={gift.title}
            subtitle="Shop Now"
            width="w-full"
            height="h-[230px]"
          />
        ))}
      </section>
      <section className="grid container mx-auto grid-cols-6 gap-8 ">
        {favoriteCard.map((fav, index) => (
          <FavoriteCard
            key={index}
            image={fav.image}
            alt={fav.title}
            price="$24.99"
          />
        ))}
      </section>
    </div>
  );
} 

