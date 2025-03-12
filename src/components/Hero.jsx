import React from "react";

const Hero = () => {
  return (
    <div className="w-full p-5  bg-[var(--color-background)]">
      <div className="mt-5">
        <h1 className="text-5xl font-bold tracking-tight leading-tight md:whitespace-nowrap md:text-6xl lg:text-7xl xl:text-8xl">
          Bridging the Gap Between{" "}
        </h1>
        <h1 className="text-5xl font-bold tracking-tight leading-tight md:whitespace-nowrapp md:text-6xl lg:text-7xl xl:text-8xl">
          Academic and Industry:{" "}
        </h1>
        <h1 className="text-5xl font-bold tracking-tight leading-tight md:whitespace-nowrapp md:text-6xl lg:text-7xl xl:text-8xl">
          Secure Your <span className="text-[var(--color-red)]">Dream Job</span>
        </h1>
        <p className="mt-5 text-base font-semibold md:text-xl lg:w-5/6">
          Turn your academic achievements into career success — gain the
          training, certification, and industry experience to land your dream
          job.
        </p>

        <button className="my-10 hero-btn bg-[var(--color-red)] text-[var(--color-white)]
        text-xl capitalize font-semibold px-12 py-2 rounded-full cursor-pointer
        md:px-20 md:py-4 md:text-2xl lg:px-24 xl:py-3">
            start now
        </button>
      </div>
    </div>
  );
};

export default Hero;
