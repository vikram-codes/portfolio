"use client";

import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>
      <div
        className="fixed z-[9999] pointer-events-none top-0 left-0 rounded-full bg-white"
        style={{
          width: "14px",
          height: "14px",
          transform: `translate3d(${position.x - 7}px, ${position.y - 7}px, 0)`,
          transition: "transform 0.08s linear",
          mixBlendMode: "difference",
        }}
      />
    </>
  );
};

export default CustomCursor;
