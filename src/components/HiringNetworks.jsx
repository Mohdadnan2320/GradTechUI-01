import React from "react";
import CountUp from "./Count";

const HiringNetworks = () => {
  const HiringNetworksData = [
    {
      name: "Salary Hike",
      logo: "growth.webp",
      count: 100,
      icon: "",
      util: "%",
    },
    {
      name: "Hiring partners",
      logo: "handshake.png",
      count: 500,
      icon: "",
      util: "+",
    },
    {
      name: "Industry experts",
      logo: "quality.webp",
      count: 50,
      util: "+",
    },
    {
      name: "Placemnet assurance",
      logo: "placement.webp",
      count: 100,
      util: "%",
    },
  ];

  return (
    <div className="w-full h-full bg-[var(--color-background-secondary)]">
        <div className="mt-5 p-5 md:mt-10">
          <h1 className="text-2xl font-semibold text-[var(--color-white)] md:text-5xl lg:text-6xl xl:text-7xl">
            Extensive
            <span className="text-[var(--color-red)]"> Hiring </span>
            Network
          </h1>
          <p className="mt-5 text-base font-medium  text-[var(--color-white)] md:text-xl xl:text-2xl">
            Gain valuable knowledge from 50+ industry experts and expand your
            professional network through 500+ hiring partners, opening doors to
            endless career opportunities.
          </p>
        </div>
        <div className="w-full h-full pt-10 grid-cols-2 grid md:pt-0 md:mb-10">
          {HiringNetworksData.map((items, i) => {
            return (
              <div key={i} className="p-5 md:p-10">
                <div className="">
                  <CountUp
                    from={0}
                    to={items.count}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text text-5xl text-[var(--color-red)] font-bold md:text-7xl xl:text-8xl"
                  />
                  <span className="text-5xl text-[var(--color-red)] md:text-7xl font-bold xl:text-8xl">
                    {items.util}
                  </span>
                </div>
                <div className="flex items-end gap-1 mt-1">
                  <div className="w-5 md:w-8">
                    <img className="w-full h-full" src={items.logo} alt="" />
                  </div>
                  <h3 className="text-sm leading-none capitalize font-light text-[var(--color-white)] md:font-medium md:text-2xl">
                    {items.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
  );
};

export default HiringNetworks;
