function ToolboxItem({
  toolboxItem,
}: {
  toolboxItem: {
    title: string;
    icon: JSX.Element;
  }[];
}) {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-4">
      {toolboxItem.map((item, index) => (
        <div
          key={index}
          className="group relative flex items-center gap-2 px-5 py-3 rounded-lg 
        border border-white/10 bg-white/5 backdrop-blur-md 
        hover:shadow-[0_0_20px_rgba(0,255,200,0.15)] 
        transition-all duration-300 cursor-pointer"
        >
          <div className="absolute -inset-px rounded-lg bg-gradient-to-br from-emerald-400/10 via-purple-500/5 to-sky-500/10 blur-sm opacity-0 group-hover:opacity-100 transition duration-500 z-0" />
          <div className="relative z-10 flex items-center gap-2 text-white">
            {item.icon}
            <span className="text-sm font-medium">{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ToolboxItem;
