import React from "react";
import CourseCard from "./CourseCard";

const Courses = () => {

    const courseDeatials = [
        {
            title: "Mechanical Engineering",
            taught: "Industry Expert (13+ yrs XP)",
            placement: "100% assistance*",
            duration:"3 Months",
            stipend: "Avg. ₹20,000",
            opportunities: "3L+ jobs",
            fee: "₹9,999 (Up to 30% off)"
        },
        {
            title: "Civil Engineering",
            taught: "Industry Expert (28+ yrs XP)",
            placement: "100% assistance*",
            duration:"3 Months",
            stipend: "Avg. ₹20,000",
            opportunities: "3L+ jobs",
            fee: "₹9,999 (Up to 30% off)"
        },
        {
            title: "Electrical Engineering",
            taught: "Industry Expert (10+ yrs XP)",
            placement: "100% assistance*",
            duration:"3 Months",
            stipend: "Avg. ₹20,000",
            opportunities: "3L+ jobs",
            fee: "₹9,999 (Up to 30% off)"
        },
        {
            title: "CS/IT",
            taught: "Industry Expert (8+ yrs XP)",
            placement: "100% assistance*",
            duration:"6 Months",
            stipend: "Avg. ₹40,000",
            opportunities: "1L+ jobs",
            fee: "₹19,999 (Up to 30% off)"
        },
        {
            title: "Electronics and Communication",
            taught: "Industry Expert (13+ yrs XP)",
            placement: "100% assistance*",
            duration:"3 Months",
            stipend: "Avg. ₹20,000",
            opportunities: "3L+ jobs",
            fee: "₹9,999 (Up to 30% off)"
        },
        {
            title: "Agriculture  Engineering",
            taught: "Industry Expert (13+ yrs XP)",
            placement: "100% assistance*",
            duration:"3 Months",
            stipend: "Avg. ₹20,000",
            opportunities: "3L+ jobs",
            fee: "₹9,999 (Up to 30% off)"
        },
    ]


  return (
    <div className="w-full h-full mt-5  bg-[var(--color-background-secondary)] md:mt-10">
      <div className=" p-5 ">
        <h1 className="text-2xl font-semibold text-[var(--color-white)] md:text-5xl lg:text-6xl xl:text-7xl">
          <span className="text-[var(--color-red)]"> Engineering </span>
           Courses & Programs
        </h1>
        <p className="mt-5 text-base font-medium  text-[var(--color-white)] md:text-xl xl:text-2xl">
          Gain valuable knowledge from 50+ industry experts and expand your
          professional network through 500+ hiring partners, opening doors to
          endless career opportunities.
        </p>
      </div>
      <div className="w-full h-full mt-5 p-5 md:flex md:flex-wrap md:justify-around md:items-center">
            {
                courseDeatials.map((course, index) => (
                    <CourseCard key={index} course={course} />
                ))
            }
      </div>
      <div className=" flex items-center justify-center mt-5 pb-10">
          <button
            className=" bg-[var(--color-red)] text-[var(--color-white)]
        text-lg capitalize px-20 py-3 rounded-full cursor-pointer hero-btn
        md:px-28 md:py-4 md:text-xl md:font-semibold"
          >
            Explore more
          </button>
        </div>
    </div>
  );
};

export default Courses;
