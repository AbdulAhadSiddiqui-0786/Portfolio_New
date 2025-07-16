import { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

const SkillProgressBar = ({
  skillName,
  proficiencyPercentage,
  primaryColor,
  secondaryColor,
  icon,
}) => {
  const [progress, setProgress] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(proficiencyPercentage);
    }, 500);
    return () => clearTimeout(timer);
  }, [proficiencyPercentage]);

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className={`p-6 relative flex justify-center items-center font-sans ${
        theme === "light" ? "text-black" : "text-white"
      }`}
    >
      <motion.div
        className="relative w-40 h-40 flex items-center justify-center rounded-full bg-white/10 backdrop-blur border border-white/20 shadow-xl"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <svg className="w-full h-full transform -rotate-90 drop-shadow-xl">
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="#e6e6e6"
            strokeWidth="10"
            fill="none"
            className="opacity-25"
          />
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke={`url(#${skillName}Gradient)`}
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset,
              transition: "stroke-dashoffset 1s ease-in-out",
            }}
          />
          <defs>
            <linearGradient id={`${skillName}Gradient`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={primaryColor} />
              <stop offset="100%" stopColor={secondaryColor} />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {icon && <img src={icon} alt={skillName} className="w-6 h-6 mb-1 opacity-80 mt-3" />}
          <span className="text-xl md:text-2xl font-bold">{progress}%</span>
          <span className="text-sm  mb-5">{skillName}</span>
        </div>

        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-xl text-xs shadow-lg backdrop-blur-md"
            >
              {`${skillName}: ${progress}% Proficiency`}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SkillProgressBar;
