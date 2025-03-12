import React, { useEffect, useState } from "react";
import RotatingText from "./RotatingText"; // Import the RotatingText component

const LoadingScreen = ({ onLoaded }) => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
      onLoaded(); // Notify the parent component that loading is done
    }, 6000); // Adjust the time as needed
  }, []);

  if (!showLoading) return null;

  return (
    <div className="flex justify-center items-center h-screen bg-[var(--color-background-secondary)] text-white">
      <div className="text-3xl font-bold flex gap-5">
      <h1 className="font-bold ">
              Grad<span className="text-[var(--color-red)]">Tech</span>
        </h1>
        <RotatingText
          texts={["Learning", "Growing", "Innovating!"]}
          mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
