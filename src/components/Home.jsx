import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import SkillsSection from "./SkillsSection";
import ProjectSection from "./ProjectSection";

import CertificateSection from "./CertificationSection";
import { ColourfulText } from "./ui/colourful-text";
import AboutMe from "./AboutMe";
import ContactUs from "./ContactUs.jsx"; 



const Home = () => {
  const { theme } = useContext(ThemeContext);

  const sectionWrapperClasses = "flex items-center justify-center min-h-screen mb-20 px-4 sm:px-8";

  return (
    <div
      className={`${theme === "light" ? "text-black" : "text-white"}`}
      id="home"
    >
      {/* Hero Section */}
      <div className="flex justify-center items-center flex-col mt-24 overflow-visible min-h-screen mb-20 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-relaxed pb-2 text-transparent bg-gradient-to-r from-fuchsia-500 via-pink-500 to-fuchsia-500 bg-clip-text dark-glow-text">
          Welcome to My Portfolio
        </h2>

        <p className="text-lg md:text-xl drop-shadow-md">
          Hi, <ColourfulText text="I'm Abdul Ahad Siddiqui," /> a Passionate
          Full Stack Web Developer
        </p>
        <p className="text-lg md:text-xl drop-shadow-md">
          Explore my projects and skills
        </p>
        <div class="flex flex-wrap items-center justify-center gap-4 text-lg md:text-xl text-pink-700 dark:text-pink-300 mt-10">
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-code w-6 h-6"
              aria-hidden="true"
            >
              <path d="m16 18 6-6-6-6"></path>
              <path d="m8 6-6 6 6 6"></path>
            </svg>
            <span>React &amp; Next.js</span>
          </div>
          <div class="hidden md:block w-2 h-2 bg-pink-500 rounded-full"></div>
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-palette w-6 h-6"
              aria-hidden="true"
            >
              <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
              <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
              <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
              <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
              <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </svg>
            <span>Tailwind CSS</span>
          </div>
          <div class="hidden md:block w-2 h-2 bg-pink-500 rounded-full"></div>
          <span>MongoDB</span>
        </div>
      </div>

      {/* Skills Section */}
      <section id="skills" className={sectionWrapperClasses}>
        <SkillsSection />
      </section>

      {/* Certificates Section */}
      <section id="Certificates" className={sectionWrapperClasses}>
        <CertificateSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className={sectionWrapperClasses}>
        <ProjectSection />
      </section>

      {/* About Section */}
      <section id="about">
        <AboutMe />
      </section>

      <section id="Contact" className={sectionWrapperClasses}>
        <ContactUs />
      </section>
    </div>
  );
};

export default Home;
