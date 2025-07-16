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
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          preset: "snow",
          fullScreen: { enable: false },
          style: {
            position: "absolute",
            width: "100%",
            height: "100%",
          },
          background: {
            color: { value: "transparent" },
          },
          particles: {
            color: {
              value: theme === "dark" ? "#ffffff" : "#0077ff" // white snow in dark, blue in light
            },
          },
        }}
      />
    </div>
  );
};

export default SnowBackground;
