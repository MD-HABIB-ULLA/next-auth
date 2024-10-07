"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [preloaderDisable, setPreloaderDisable] = useState(false);

  useEffect(() => {
    // Set a timeout to disable the preloader after a delay (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setPreloaderDisable(true);
    }, 2000); // Delay of 2 seconds

    // Cleanup the timeout when component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="preloader js-preloader">
      <div
        className="bg-black"
        style={{ 
          transform: preloaderDisable ? "scale(1, 0)" : "scale(1, 1)", 
          transition: "transform 0.5s ease"  // Smooth transition
        }}
      ></div>
    </div>
  );
}
