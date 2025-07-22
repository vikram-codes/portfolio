// import myImageIcon from "../assets/images/my-image-icon-new.png";
import myImageIcon from "../assets/images/memoji-computer.png";
import ArrowDown from "../assets/icons/arrow-down.svg";
import Image from "next/image";
// import grainImage from "../assets/images/grain.jpg";
import Star from "../assets/icons/star.svg";
import HeroOrbit from "../components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 relative z-0 overflow-x-clip">
      {/* <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div> */}
      <div className="size-[620px] hero-ring"></div>
      <div className="size-[820px] hero-ring"></div>
      <div className="size-[1020px] hero-ring"></div>
      <div className="size-[1220px] hero-ring"></div>
      <HeroOrbit size={800} rotation={-72}>
        <Star className="size-28 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={550} rotation={20}>
        <Star className="size-12 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={590} rotation={98}>
        <Star className="size-8 text-emerald-300" />
      </HeroOrbit>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={myImageIcon}
            alt="My Image Icon"
            className="w-[70px] md:w-[100px]"
          />

          <div className="mt-4 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-gray-950 border border-gray-800 px-4 py-1.5 rounded-lg">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping"></div>
              <div className="relative bg-green-500 size-2.5 rounded-full z-10"></div>
            </div>
            <div className="text-sm font-medium text-center sm:text-left">
              Available for new opportunities
            </div>
          </div>
        </div>

        <h1 className="text-balance bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl font-semibold text-center mt-6 md:mt-8 leading-tight tracking-tight">
          Building Modern Web Experiences
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-center animate-fadeIn opacity-0 animate-delay-300 text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed">
          I enjoy building intuitive user interfaces and scalable backends using
          the latest JavaScript technologies. I focus on clarity, performance,
          and creating real-world solutions.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 px-6 h-12 rounded-xl border border-neutral-700 hover:-translate-y-1 hover:border-neutral-500 transition-all duration-300 ease-in-out">
            <span className="font-semibold text-neutral-200">
              Explore my Projects
            </span>
            <ArrowDown className="size-4 text-neutral-400" />
          </button>

          <button className="lets-connect-btn inline-flex items-center gap-2 px-6 h-12 rounded-xl text-white font-semibold shadow-lg border-0">
            <span>👋🏻</span>
            <span>Let&#39;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
