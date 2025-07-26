// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import { Inter, Calistoga } from "next/font/google";
// import CustomCursor from "../components/CustomCursor"; // Commented out to fix mouse cursor issues with easter eggs
import EasterEggSystem from "../components/EasterEggSystem";

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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${calistoga.variable} bg-gray-900 text-white antialiased font-sans`}
      >
        <EasterEggSystem />
        {/* <CustomCursor /> */}{" "}
        {/* Commented out to fix mouse cursor issues with easter eggs */}
        {children}
      </body>
    </html>
  );
}
