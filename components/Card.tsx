import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-md overflow-hidden transition-all duration-500 hover:border-white/20 w-full p-6 text-center space-y-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
