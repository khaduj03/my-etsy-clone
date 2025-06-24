"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import clsx from "clsx"; 

interface AnimatedButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverColor?: string; 
  children: React.ReactNode;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  hoverColor = "bg-gray-200",
  className = "",
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={clsx(
        "relative overflow-hidden px-3 py-2 font-semibold rounded-full cursor-pointer select-none",
        className
      )}
    >
      {/* Background animation */}
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 2.8 : 0 }}
        transition={{ duration: 0.3, ease: "linear" }}
        className={clsx("absolute inset-0", hoverColor)}
        style={{
          zIndex: 0,
          borderRadius: "9999px", 
        }}
      />

      {/* Content */}
      <span className="relative z-10">{children}</span>
    </div>
  );
};
