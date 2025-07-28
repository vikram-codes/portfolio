import { useState, useEffect } from "react";
import Image from "next/image";
import Card from "../Card";
import MemojiSmile from "../../assets/images/memoji-smile.png";
import Map from "../../assets/images/map.png";

const TEXTS = [
  "Hey, I'm here!",
  "Building cool stuff!",
  "Ready to connect!",
  "Let's work together!",
  "Based in Ontario!",
];

function MyLocation() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentText = TEXTS[currentTextIndex];

    if (isTyping) {
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % TEXTS.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, currentTextIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="flex justify-center mb-10">
      <Card className="relative h-[320px] !p-0 overflow-hidden group cursor-pointer">
              <div className="relative h-full w-full group">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />

        <Image
          src={Map}
          alt="Toronto Map"
          fill
          className="object-cover transition-transform scale-110 duration-700 group-hover:scale-125"
          priority
          sizes="(max-width: 768px) 100vw, W600px"
        />

        <div className="absolute top-2 left-6 flex items-center space-x-3 rounded-xl px-4 py-2 shadow-lg backdrop-blur-md bg-white/10 border border-white/20 transition-all duration-500 hover:scale-105 z-20">
          <div className="relative">
            <Image
              src={MemojiSmile}
              alt="Memoji Smile"
              className="size-12 transition-transform duration-300 hover:rotate-12"
            />
          </div>
          <div className="font-semibold text-white text-lg min-w-[180px]">
            <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
              {displayedText}
              <span
                className={`${
                  showCursor ? "opacity-100" : "opacity-0"
                } transition-opacity duration-100`}
              >
                |
              </span>
            </span>
          </div>
        </div>

        <div className="absolute bottom-6 right-8 text-white px-4 py-2 rounded-lg shadow-lg backdrop-blur-md transition-all duration-500 hover:scale-105 z-20">
          <span className="font-semibold">London, Ontario 🇨🇦</span>
        </div>

        <div className="absolute inset-0 pointer-events-none z-15">
          <div
            className="absolute top-1/4 left-1/3 w-2 h-2 bg-emerald-400/70 rounded-full animate-bounce opacity-60"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-purple-400/70 rounded-full animate-bounce opacity-50"
            style={{ animationDelay: "0.7s" }}
          />
          <div
            className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-cyan-400/70 rounded-full animate-bounce opacity-40"
            style={{ animationDelay: "1.4s" }}
          />
        </div>
      </Card>
    </div>
  );
}

export default MyLocation;
