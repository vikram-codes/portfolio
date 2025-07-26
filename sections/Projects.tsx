"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import converso from "../assets/images/converso.png";
import theWildOasis from "../assets/images/the-wild-oasis-website.png";
import fastPizzaCo from "../assets/images/fast-pizza.png";

import ArrowUpRight from "../assets/icons/arrow-up-right.svg";
import GithubLogo from "../assets/icons/github.svg";

const portfolioProjects = [
  {
    company: "Converso",
    title: "Converso – AI Companion SaaS Platform (Full Stack)",
    results: [
      {
        title:
          "Built full-stack SaaS product using Next.js, Vapi, and OpenAI APIs",
      },
      {
        title:
          "Implemented dynamic companion creation with real-time voice chat using Vapi SDK",
      },
      {
        title:
          "Integrated Clerk for auth, Stripe for payments, and RLS-based access control",
      },
    ],
    link: "https://converso-vlse.vercel.app/",
    image: converso,
  },
  {
    company: "The Wild Oasis",
    title: "The Wild Oasis – Full-Stack Cabin Booking Platform",
    results: [
      {
        title:
          "Developed customer-facing booking portal using Next.js & Supabase",
      },
      {
        title:
          "Leveraged Supabase Realtime & Row-Level Security for secure data access",
      },
      {
        title:
          "Used NextAuth for authentication and dynamic session-based UI updates",
      },
    ],
    link: "https://the-wild-oasis-website-rho.vercel.app",
    image: theWildOasis,
  },
  {
    company: "Fast Pizza Co.",
    title: "Fast Pizza Co. – Pizza Ordering SPA (Frontend Focused)",
    results: [
      { title: "Built complete cart-to-checkout experience with React + Vite" },
      {
        title: "Implemented responsive menu, cart, and order tracking flows",
      },
      {
        title:
          "Styled entire UI using TailwindCSS with reusable utility-first patterns",
      },
    ],
    link: "https://fast-pizza-co-iota.vercel.app",
    image: fastPizzaCo,
  },
];

export const ProjectsSection = () => {
  return (
    <div className="projects-section py-16 md:py-24">
      <div className="container py-24 px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-400 mb-4">
          Featured Projects
        </h2>
        <p className="text-center text-neutral-400 mb-12 max-w-2xl mx-auto">
          A collection of recent builds that reflect my full-stack capabilities.
          From frontend finesse to backend architecture, these projects show my
          ability to ship polished, scalable apps built with modern JavaScript
          technologies.
        </p>

        {/* Stacking zone */}
        <div className="relative h-[300vh]">
          <div className="absolute top-0 left-0 w-full h-full space-y-16">
            {portfolioProjects.map((project, idx) => {
              const topOffset = 80 + idx * 50;
              const zIndex = 10 - idx;

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className={`sticky mx-auto max-w-3xl z-[${zIndex}] rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-md overflow-hidden transition-all duration-500 hover:border-white/20`}
                  style={{ top: `${topOffset}px` }}
                >
                  {/* Image */}
                  <div className="w-full">
                    <Image
                      src={project.image}
                      alt={`${project.company} project`}
                      className="object-cover w-full h-60 sm:h-56 md:h-72 lg:h-80 rounded-t-2xl"
                    />
                  </div>

                  {/* Content */}
                  <div className="w-full p-6 md:p-8 space-y-4 flex flex-col justify-between">
                    <div className="space-y-4">
                      <h3 className="text-xl md:text-2xl font-semibold text-white">
                        {project.title}
                      </h3>
                      <ul className="text-neutral-400 text-sm space-y-2 list-disc pl-5">
                        {project.results.map((result) => (
                          <li
                            key={result.title}
                            className="leading-snug text-neutral-300"
                          >
                            {result.title}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-4 mt-6 justify-center md:justify-start">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm rounded-lg bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition"
                      >
                        <span>View Live Site</span>
                        <span>
                          <ArrowUpRight className="inline-block ml-1 size-4" />
                        </span>
                      </a>
                      <button className="px-4 py-2 text-sm rounded-lg border border-white/15 text-white font-medium hover:bg-white/10 transition items-center min-w-[90px]">
                        <span>View Code</span>
                        <span>
                          <GithubLogo className="inline-block ml-2 size-4" />
                        </span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
