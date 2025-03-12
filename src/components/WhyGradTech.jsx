import React from "react";

const WhyGradTech = () => {
  const details = [
    {
      title: "Live Session",
      description:
        "The trainer does not proceed to the next topic until all doubts are clear.",
      logo: "support.webp",
      color: "red",
    },

    {
      title: "Doubt Session",
      description:
        "Not only chat support, but If you are stuck on any of your assignment share the screen to ask doubts.",
      logo: "question-sign-in-circles.webp",
    },

    {
      title: "community support",
      description:
        "You will be the part of asia's first exclusive engineers community",
      logo: "community-approach.png",
    },

    {
      title: "Interview support",
      description:
        "Practice with Industry expert engineers and HR. Receive valuable feedback",
      logo: "office.png",
    },
  ];

  return (
    <div className="w-full h-full  bg-[var(--color-background-secondary)] mt-5 p-5 md:mt-10">
      <div>
        <h1 className="text-2xl font-semibold text-[var(--color-white)] md:text-5xl lg:text-6xl xl:text-7xl">
          Why Grad
          <span className="text-[var(--color-red)]">Tech </span>?
        </h1>
        <p className="mt-5 text-base font-medium  text-[var(--color-white)] md:text-xl xl:text-2xl">
          We welcome students from all engineering backgrounds. The eligibility
          criteria to be part of our Assured Opportunity program are a passion
          for learning digital technologies within your field and dedication for
          three to six months.
        </p>
      </div>
      <div className="md:my-10 lg:flex lg:flex-wrap lg:justify-evenly lg:items-center">
        {details.map((item, index) => (
          <div key={index} className={`w-full  ${item.color ? 'bg-[var(--color-red)]' : 'bg-[var(--color-background)]'}  rounded-xl grid place-content-center mt-5 py-10 px-5
          md:place-content-start lg:w-96 lg:h-52`}>
            <div className="flex gap-2 items-center md:gap-3">
              <div className="w-8 md:w-10">
                <img className="w-full h-full" src={item.logo} alt="" />
              </div>
              <h3 className = {`text-base font-medium capitalize ${item.color ? 'text-[var(--color-white)]' : 'text-[var(--color-black)]'}
                md:text-lg`}>
                {item.title}
              </h3>
            </div>
            <p className={`mt-3 text-sm font-light ${item.color ? 'text-[var(--color-white)]' : 'text-[var(--color-black)]'}
              md:text-base`}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyGradTech;
