import { motion } from "framer-motion";
import SkillProgressBar from "./SkillProgressBar";


const skills = [
  {
    name: "MongoDB",
    percentage: 90,
    primaryColor: "#13AA52",
    secondaryColor: "#2A6B82",
    icon: "/icons/MongoDB.png",
  },
  {
    name: "ExpressJS",
    percentage: 85,
    primaryColor: "#444444",
    secondaryColor: "#222222",
    icon: "/icons/Express.png",
  },
  {
    name: "ReactJS",
    percentage: 80,
    primaryColor: "#61DAFB",
    secondaryColor: "#1A4674",
    icon: "/icons/React.png",
  },
  {
    name: "Node.js",
    percentage: 75,
    primaryColor: "#43853D",
    secondaryColor: "#4CAF50",
    icon: "/icons/Node.js.png",
  },
  {
    name: "Python",
    percentage: 75,
    primaryColor: "#306998",
    secondaryColor: "#FFD43B",
    icon: "/icons/Python.png",
  },
  {
    name: "Django",
    percentage: 75,
    primaryColor: "#092E20",
    secondaryColor: "#1B4E40",
    icon: "/icons/Django.png",
  },
  {
    name: "AI/ML/DL",
    percentage: 60,
    primaryColor: "#FF6B6B",
    secondaryColor: "#5C5470",
    icon: "/icons/AI.png",
  },
  {
    name: "DataScience",
    percentage: 70,
    primaryColor: "#FFA43B",
    secondaryColor: "#FF6B3B",
    icon: "/icons/data-science.png",
  },
];

const SkillsSection = () => {
  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          className="flex justify-center " //
        >
          <SkillProgressBar
            skillName={skill.name}
            proficiencyPercentage={skill.percentage}
            primaryColor={skill.primaryColor}
            secondaryColor={skill.secondaryColor}
            icon={skill.icon}
          />
        </motion.div>
      ))}
    </div>
  
  );
};

const Skills = () => {
  return (
    <section id="skills">
      <div className="relative mx-auto">
        <h2 className="text-4xl md:text-4xl font-bold text-center mb-12 font-sans">Technical Proficiency</h2>
        <SkillsSection />
      </div>
    </section>
  );
};

export default Skills;
