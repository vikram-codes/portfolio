import ArrowUpRight from "../assets/icons/arrow-up-right.svg";

export const ContactSection = () => {
  return (
    <div className="py-24 pt-24">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 rounded-lg px-10 py-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div>
              <h2 className="text-2xl font-serif md:text-3xl">Get in Touch</h2>
              <p className="text-sm md:text-base mt-2">
                Thank you for visiting my portfolio. As a passionate developer,
                I’m eager to learn, grow, and contribute. If you have any
                questions, opportunities, or simply wish to say hello, I’d be
                delighted to hear from you.
              </p>
            </div>
            <div>
              <button className="group text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl mt-8 gap-2 w-max border border-gray-900 hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400 relative overflow-hidden">
                <span className="font-semibold relative z-10 transition-all duration-300 group-hover:tracking-widest group-hover:text-emerald-300">
                  Let's Connect
                </span>
                <span className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-emerald-400/20 via-sky-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                <ArrowUpRight className="size-5 ml-2 relative z-10 transition-transform duration-500 group-hover:rotate-[30deg] group-hover:scale-125 group-hover:drop-shadow-[0_2px_8px_rgba(16,185,129,0.4)]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
