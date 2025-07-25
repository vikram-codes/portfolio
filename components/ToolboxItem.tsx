import { Fragment } from "react";

function ToolboxItem({
  toolboxItem,
  className,
}: {
  toolboxItem: {
    title: string;
    icon: JSX.Element;
  }[];
  className?: string;
}) {
  return (
    <div
      className={`flex flex-none justify-center gap-4 py-4 items-center ${className}`}
    >
      {[...new Array(2)].map((_, idx) => (
        <Fragment key={idx}>
          {toolboxItem.map((item, index) => (
            <div
              key={index}
              className="group relative flex-none flex items-center gap-2 px-5 py-3 rounded-lg 
  border border-white/10 bg-white/5 backdrop-blur-md 
  hover:shadow-[0_0_20px_rgba(0,255,200,0.15)] 
  transition-all duration-300 cursor-pointer"
            >
              <div className="absolute -inset-px rounded-lg gap-6 bg-gradient-to-br from-emerald-400/10 via-purple-500/5 to-sky-500/10 blur-sm opacity-100 group-hover:opacity-100 transition duration-500 z-0" />
              <div className="relative z-10 flex items-center gap-2 text-white">
                {item.icon}
                <span className="text-sm font-semibold whitespace-nowrap text-ellipsis block">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </Fragment>
      ))}
    </div>
  );
}

export default ToolboxItem;
