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
      <section id="about" >
        <AboutMe />
      </section>

      <section id="Contact" className={sectionWrapperClasses}>
        <ContactUs />
      </section>
    </div>
  );
};

export default Home;
