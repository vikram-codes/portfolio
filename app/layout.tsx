// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import { Inter, Calistoga } from "next/font/google";
import CustomCursor from "../components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

export const metadata = {
  title: "My Portfolio",
  description:
    "Personal portfolio website built with Next.js and Tailwind CSS. Showcasing projects, skills, and experience.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${calistoga.variable} bg-gray-900 text-white antialiased font-sans`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
