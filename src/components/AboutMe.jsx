import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-24 "
    >
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Hello! I’m{" "}
          <span className="font-semibold text-pink-600 dark:text-pink-400">
            Abdul Ahad Siddiqui
          </span>
          , a passionate Full Stack Web Developer specializing in building
          modern, responsive web applications using the{" "}
          <strong>MERN stack</strong> (MongoDB, Express, React, Node.js).
          <br />
          <br />I love creating beautiful, accessible UIs with{" "}
          <strong>Tailwind CSS</strong>, working on real-world projects, and
          constantly learning new technologies. My goal is to bring ideas to
          life with clean code and creative design.
          <br />
          <br />
          When I'm not coding, you'll find me exploring AI tools, UI animations,
          or brainstorming product ideas. I'm currently open to internships,
          freelance work, and full-time roles!
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
