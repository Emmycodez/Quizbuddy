import React, { useState, useEffect } from "react";

const ProgressBar = ({ max, value }) => {
  const [progress, setProgress] = useState(value);

  useEffect(() => {
    if (progress < max) {
      const timer = setTimeout(() => setProgress(progress + 1), 40); // Adjust the interval for speed
      return () => clearTimeout(timer);
    }
  }, [progress, max]);

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#71717A",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${(progress / max) * 100}%`,
          height: "10px",
          backgroundColor: "#2563EB",
          transition: "width 0.1s ease-in-out",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
