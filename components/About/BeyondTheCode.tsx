import Card from "../Card";
import Star from "../../assets/icons/star.svg";
import { motion } from "framer-motion";
import { useRef } from "react";

const hobbies = [
  {
    title: "Gaming",
    icon: <span className="text-neutral-400 text-sm">🎮</span>,
    left: "5%",
    top: "5%",
  },
  {
    title: "Music",
    icon: <span className="text-neutral-400 text-sm">🎵</span>,
    left: "50%",
    top: "5%",
  },
  {
    title: "Reading",
    icon: <span className="text-neutral-400 text-sm">📚</span>,
    left: "10%",
    top: "35%",
  },
  {
    title: "Fitness",
    icon: <span className="text-neutral-400 text-sm">🏋️‍♂️</span>,
    left: "35%",
    top: "40%",
  },
  {
    title: "Traveling",
    icon: <span className="text-neutral-400 text-sm">✈️</span>,
    left: "70%",
    top: "45%",
  },
  {
    title: "Cooking",
    icon: <span className="text-neutral-400 text-sm">🍳</span>,
    left: "5%",
    top: "65%",
  },
  {
    title: "Sudoku",
    icon: <span className="text-neutral-400 text-sm">🔢</span>,
    left: "45%",
    top: "70%",
  },
];

function BeyondTheCode() {
  const constraintRef = useRef(null);
  return (
    <>
      <div className="flex justify-center mb-10">
        <Card className="h-[320px] p-0 flex flex-col">
          <div className="px-6 pt-2">
            <div className="flex justify-center items-center gap-x-2">
              <Star className="size-9 text-emerald-300" />
              <h3 className="text-xl font-semibold text-white">
                Beyond the Code
              </h3>
            </div>
            <p className="text-neutral-400 text-sm pt-3">
              A peek into my interests outside of Development—things that keep
              my brain buzzing and soul happy.
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1 relative"
            ref={constraintRef}
          >
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center gap-2 px-5 py-2 rounded-full
        bg-gradient-to-r from-emerald-500 via-sky-500 to-purple-500
        text-gray-900 shadow-[0_0_12px_rgba(0,0,0,0.2)]
        border border-white/10 absolute cursor-grab active:cursor-grabbing"
                style={{ left: hobby.left, top: hobby.top }}
                drag
                dragConstraints={constraintRef}
                dragElastic={0.1}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                whileDrag={{ 
                  scale: 1.1, 
                  zIndex: 10,
                  boxShadow: "0 0 20px rgba(0,0,0,0.3)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <span className="font-semibold text-gray-950 text-sm">
                  {hobby.title}
                </span>
                <div className="text-base">{hobby.icon}</div>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}

export default BeyondTheCode;
