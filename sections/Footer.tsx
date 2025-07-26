"use client";

import ArrowUpRight from "../assets/icons/arrow-up-right.svg";
import GithubIcon from "../assets/icons/github.svg";
import GmailLogo from "../assets/icons/gmail.svg";
import Image from "next/image";

const footerLinks = [
  {
    title: "Github",
    url: "https://github.com/vikram-codes",
    icon: <GithubIcon width={24} height={24} />,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/vikramjit-saini/",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
        alt="LinkedIn"
        width={24}
        height={24}
        className="inline-block"
      />
    ),
  },
  {
    title: "Email",
    url: "mailto:vikramjit.professional@gmail.com",
    icon: <GmailLogo width={24} height={24} />,
  },
];

export const Footer = () => {
  return (
    <footer className="footer-section relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 transform -translate-x-1/2 bg-emerald-300/30 -z-10 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] "></div>
      <div className="container">
        <div className="py-6  border-t border-white/15 flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-base opacity-70">
            © 2025 My Portfolio. All rights reserved.
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.url}
                key={link.title}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white no-underline font-medium text-base px-3 py-1 rounded-md transition-colors duration-200 hover:text-sky-400"
              >
                {link.icon}
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRight className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
