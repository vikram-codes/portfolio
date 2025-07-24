// components/Card.tsx
import { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-md overflow-hidden transition-all duration-500 hover:border-white/20 w-full max-w-md p-6 text-center space-y-4">
      {children}
    </div>
  );
};

export default Card;
