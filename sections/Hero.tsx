"use client";

// import myImageIcon from "../assets/images/my-image-icon-new.png";
import myImageIcon from "../assets/images/memoji-computer.png";
import ArrowDown from "../assets/icons/arrow-down.svg";
import Image from "next/image";
import CatSideEye from "../assets/images/cat-side-eye.png";
// import grainImage from "../assets/images/grain.jpg";
import Star from "../assets/icons/star.svg";
import Sparkle from "../assets/icons/sparkle.svg";
import HeroOrbit from "../components/HeroOrbit";
import SpecialClickableWord from "../components/SpecialClickableWord";

export const HeroSection = () => {
  const scrollToSection = (sectionClass: string) => {
    const element = document.querySelector(`.${sectionClass}`);
    if (element) {
      const headerOffset = 80; // Account for fixed header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="hero-section py-32 md:py-48 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className="size-[620px] hero-ring pointer-events-none"></div>
        <div className="size-[820px] hero-ring pointer-events-none"></div>
        <div className="size-[1020px] hero-ring pointer-events-none"></div>
        <div className="size-[1220px] hero-ring pointer-events-none"></div>
        <HeroOrbit size={800} rotation={-72}>
          <Star className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <Star className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
          <Star className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-15}>
          <Sparkle className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={80}>
          <Sparkle className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={180}>
          <Sparkle className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={145}>
          <Sparkle className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85}>
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-40}>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="relative w-[70px] md:w-[100px] h-[70px] md:h-[100px] group cursor-pointer">
            {/* Main Image */}
            <Image
              src={myImageIcon}
              alt="My Image Icon"
              className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-110"
            />
            {/* Hover Image */}
            <Image
              src={CatSideEye}
              alt="Cat Side Eye"
              className="absolute inset-0 w-full h-full object-cover opacity-0 scale-90 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100"
            />
          </div>

          <div className="mt-4 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-gray-950 border border-gray-800 px-4 py-1.5 rounded-lg">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping-large"></div>
              <div className="relative bg-green-500 size-2.5 rounded-full"></div>
            </div>
            <div className="text-sm font-medium text-center sm:text-left">
              Available for new opportunities as a{" "}
              <SpecialClickableWord className="font-bold">
                DEVELOPER
              </SpecialClickableWord>{" "}
              ✨
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold text-center mt-6 md:mt-8 bg-gradient-to-r from-white via-neutral-400 to-white bg-[length:300%] bg-clip-text text-transparent">
          Building Modern Web Experiences
        </h1>

        <p className="mt-4 text-center text-white/80 font-medium tracking-wide relative after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:-translate-x-1/2 after:w-24 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-purple-500 after:animate-pulse">
          I build with purpose. Precise. Performant. Practical. Powered by
          passion.”
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-4">
          <button
            onClick={() => scrollToSection("projects-section")}
            className="inline-flex items-center gap-2 px-6 h-12 rounded-xl border border-neutral-700 text-neutral-200
  transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-neutral-500 hover:bg-white/5
  backdrop-blur-sm cursor-pointer"
          >
            <span className="font-semibold">Explore my Projects</span>
            <ArrowDown className="size-4 text-neutral-400 transition-transform duration-300 group-hover:translate-y-1" />
          </button>

          <button
            onClick={() => scrollToSection("contact-section")}
            className="lets-connect-btn inline-flex items-center gap-2 px-6 h-12 rounded-xl text-white font-semibold border-0
  bg-white/5 backdrop-blur-sm transition-all duration-300 ease-in-out
  hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 group cursor-pointer"
          >
            <span className="wave-hand text-lg group-hover:animate-wiggle">
              👋🏻
            </span>
            <span>Let&#39;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
