"use client";

import { useState } from "react";

const SpecialClickableWord = ({ children, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (typeof window !== "undefined" && window.triggerSpecialClick) {
      window.triggerSpecialClick();
    }
  };

  return (
    <span
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        ${className}
        cursor-pointer
        transition-all duration-300
        ${
          isHovered
            ? "text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.6)] scale-105"
            : ""
        }
        hover:text-emerald-400
        relative
        ${isHovered ? "animate-pulse" : ""}
      `}
      title="🤫 Click me!"
    >
      {children}
      {isHovered && (
        <span className="absolute -top-1 -right-1 text-xs animate-bounce">
          ✨
        </span>
      )}
    </span>
  );
};

export default SpecialClickableWord;
