type HobbyBadgeProps = {
  title: string;
  icon: JSX.Element;
};

export const HobbyBadge = ({ title, icon }: HobbyBadgeProps) => (
  <div
    className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-xl 
               transition-all duration-300 cursor-grab active:cursor-grabbing"
  >
    <span className="text-white text-sm">{title}</span>
    {icon}
  </div>
);
