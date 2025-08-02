// src/components/SnowBackground.jsx
import React, { useCallback, useContext } from "react";
import Particles from "react-tsparticles";
import { loadSnowPreset } from "tsparticles-preset-snow";
import "./SnowBackground.css";
import { ThemeContext } from "../context/ThemeContext";

const SnowBackground = () => {
  const { theme } = useContext(ThemeContext);

  const particlesInit = useCallback(async (engine) => {
    await loadSnowPreset(engine);
  }, []);

  return (
    <div className={`snow-container ${theme}`}>
    </div>
  );
};

export default SnowBackground;
