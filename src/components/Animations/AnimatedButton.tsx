"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

interface AnimatedDivButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const AnimatedButton: React.FC<AnimatedDivButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden px-4 py-2 font-semibold rounded-full cursor-pointer ${className}`}
    >
      {/* Background animation */}
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 3 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute inset-0 bg-gray-200"
        style={{ zIndex: 0 }}
      />

      {/* Content */}
      <span className="relative z-10">{children}</span>
    </div>
  );
};
