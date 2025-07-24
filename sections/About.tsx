"use client";

import MyToolBox from "../components/About/MyToolBox";
import MyReads from "../components/About/MyReads";
import BeyondTheCode from "../components/About/BeyondTheCode";
import MyLocation from "../components/About/MyLocation";

export const AboutSection = () => {
  return (
    <div className="py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-400 mb-4">
          A Glimpse into My World
        </h2>

        <p className="text-center text-neutral-400 mb-12 max-w-2xl mx-auto">
          Learn more about who I am, what I do, and what drives my passion for
          web development. From my journey into tech to the skills I bring to
          the table, this section provides insight into my professional ethos
          and personal interests.
        </p>

        <div className="md:grid grid-cols-5 md:gap-8 mb-2">
          <div className="md:col-span-2 ">
            <MyReads />
          </div>
          <div className="md:col-span-3">
            <MyToolBox />
          </div>
        </div>
        <div className="md:grid grid-cols-5 md:gap-8 pb-2">
          <div className=" md:col-span-3">
            <BeyondTheCode />
          </div>
          <div className=" md:col-span-2">
            <MyLocation />
          </div>
        </div>
      </div>
    </div>
  );
};
