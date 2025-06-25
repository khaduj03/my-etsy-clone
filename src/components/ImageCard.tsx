import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  subtitle?: string;
  width?: string; // e.g. w-full, w-72, etc.
  height?: string; // e.g. h-96, h-[400px], etc.
};

export default function ImageCard({
  image,
  title,
  subtitle,
  width = "w-full",
  height = "h-96",
}: Props) {
  return (
    <section
      className={`relative rounded-2xl shadow-md overflow-hidden ${width} ${height}`}
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        sizes="100%"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10" />

      {/* Footer Content */}
      <div className="absolute bottom-0 z-20 w-full px-4 py-3 text-white text-start">
        <p className="text-2xl font-semibold">{title}</p>
        {subtitle && <span className="text-lg block">{subtitle}</span>}
      </div>
    </section>
  );
}
