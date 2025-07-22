// import myImageIcon from "../assets/images/my-image-icon-new.png";
import myImaceIcon from "../assets/images/memoji-computer.png";
import ArrowDown from "../assets/icons/arrow-down.svg";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="py-32">
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={myImaceIcon}
            alt="My Image Icon"
            className="size-[100px]"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">
              Available for new opportunities
            </div>
          </div>
        </div>
        <h1 className="font-serif text-3xl text-center mt-8 mb-4">
          Building Modern Web Experiences
        </h1>
        <p>
          I enjoy building intuitive user interfaces and scalable backends using
          the latest JavaScript technologies. I focus on clarity, performance,
          and creating real-world solutions.
        </p>
        <div>
          <button>
            <span>Explore my Projects</span>
            <ArrowDown />
          </button>
          <button>
            <span>👋🏻</span>
            <span>Let&#39;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
