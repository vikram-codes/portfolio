import Card from "../Card";
import Star from "../../assets/icons/star.svg";

const hobbies = [
  {
    title: "Gaming",
    icon: <span className="text-neutral-400 text-sm">🎮</span>,
  },
  {
    title: "Music",
    icon: <span className="text-neutral-400 text-sm">🎵</span>,
  },
  {
    title: "Reading",
    icon: <span className="text-neutral-400 text-sm">📚</span>,
  },
  {
    title: "Fitness",
    icon: <span className="text-neutral-400 text-sm">🏋️‍♂️</span>,
  },
  {
    title: "Traveling",
    icon: <span className="text-neutral-400 text-sm">✈️</span>,
  },
  {
    title: "Cooking",
    icon: <span className="text-neutral-400 text-sm">🍳</span>,
  },
  {
    title: "Sudoku",
    icon: <span className="text-neutral-400 text-sm">🔢</span>,
  },
];

function BeyondTheCode() {
  return (
    <>
      <div className="flex justify-center mb-10">
        <Card>
          <div className="flex justify-center items-center gap-x-2">
            <Star className="size-9 text-emerald-300" />
            <h3 className="text-xl font-semibold text-white">
              Beyond the Code
            </h3>
          </div>
          <p className="text-neutral-400 text-sm mb-6">
            A peek into my interests outside of Development—things that keep my
            brain buzzing and soul happy.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="flex items-center  justify-center gap-3 px-5 py-2.5 rounded-full
        bg-gradient-to-r from-emerald-500 via-sky-500 to-purple-500
        text-gray-900 shadow-[0_0_12px_rgba(0,0,0,0.2)]
        border border-white/10 transition-all duration-300"
              >
                <span className="text-sm font-medium tracking-wide">
                  {hobby.title}
                </span>
                <div className="text-base">{hobby.icon}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}

export default BeyondTheCode;
