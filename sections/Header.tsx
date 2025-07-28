"use client";

import { useState, useEffect } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;

            if (element.classList.contains("hero-section")) {
              setActiveSection("home");
            } else if (element.classList.contains("projects-section")) {
              setActiveSection("projects");
            } else if (
              element.classList.contains("tape-section") ||
              element.classList.contains("about-section")
            ) {
              setActiveSection("about");
            } else if (
              element.classList.contains("contact-section") ||
              element.classList.contains("footer-section")
            ) {
              setActiveSection("contact");
            }
          }
        });
      },
      {
        threshold: 0.1, // Lower threshold - trigger when 10% of the section is visible
        rootMargin: "-10% 0px -10% 0px", // Less aggressive margins
      }
    );

    const observeSections = () => {
      const selectors = [
        ".hero-section",
        ".projects-section",
        ".tape-section",
        ".about-section",
        ".contact-section",
        ".footer-section",
      ];

      selectors.forEach((selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
          if (element) {
            observer.observe(element);
          }
        });
      });
    };

    setTimeout(observeSections, 100);

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    let targetElement;

    switch (sectionId) {
      case "home":
        targetElement = document.querySelector(".hero-section");
        break;
      case "projects":
        targetElement = document.querySelector(".projects-section");
        break;
      case "about":
        targetElement = document.querySelector(".tape-section");
        break;
      case "contact":
        targetElement = document.querySelector(".contact-section");
        break;
    }

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center items-center fixed w-full z-10 top-3 p-4">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <button
          onClick={() => scrollToSection("home")}
          className={`nav-item ${
            activeSection === "home"
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className={`nav-item ${
            activeSection === "projects"
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className={`nav-item ${
            activeSection === "about"
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className={`nav-item ${
            activeSection === "contact"
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
        >
          Contact
        </button>
      </nav>
    </div>
  );
};
