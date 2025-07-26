import { Fragment } from "react";
import Star from "../assets/icons/star.svg";

const words = [
  "Performant",
  "Accessible",
  "Scalable",
  "Secure",
  "Innovative",
  "Responsive",
  "Intuitive",
  "Dynamic",
  "Robust",
  "Efficient",
  "Versatile",
  "User-friendly",
  "Cutting-edge",
  "High-quality",
];

export const TapeSection = () => {
  return (
    <div className="tape-section py-16 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black10%,black90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left-tape [animation-duration:30s]">
            {[...new Array(3).fill(0)].map((_, index) => (
              <Fragment key={index}>
                {words.map((word) => (
                  <div className="inline-flex gap-4" key={word}>
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <Star className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
