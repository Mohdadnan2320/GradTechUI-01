import React from "react";

const CourseCard = ({ course }) => {
  const { title, taught, placement, duration, stipend, opportunities, fee } =
    course;
  return (
    <div className="bg-[var(--color-background)] rounded-4xl mb-10 p-4 md:w-fit">
      <h2 className="text-center text-lg font-medium pt-5 md:py-2 md:text-xl">{title}</h2>
      <div className="w-full">
        <div className="flex items-center gap-2 mt-2">
          <div className="w-8 md:w-10">
            <img className="w-full h-full" src="/rating.png" alt="" />
          </div>
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-semibold md:text-lg">Taught By:</h4>
            <p className="text-xs font-mediun md:text-sm">{taught}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <div className="w-8 md:w-10">
            <img className="w-full h-full" src="/job.png" alt="" />
          </div>
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-semibold md:text-lg">Placement:</h4>
            <p className="text-xs font-mediun md:text-sm">{placement}</p>
          </div>
        </div>
        <div className="flex items-center gap-2  mt-2">
          <div className="w-8 md:w-10">
            <img className="w-full h-full" src="/hourglass.webp" alt="" />
          </div>
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-semibold md:text-lg">Duration:</h4>
            <p className="text-xs font-mediun md:text-sm">{duration}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <div className="w-8 md:w-10">
            <img className="w-full h-full" src="/income.webp" alt="" />
          </div>
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-semibold md:text-lg">Stipend:</h4>
            <p className="text-xs font-mediun md:text-sm">{stipend}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <div className="w-8 md:w-10">
            <img className="w-full h-full" src="/career.webp" alt="" />
          </div>
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-semibold md:text-lg">Opportunities:</h4>
            <p className="text-xs font-mediun md:text-sm">{opportunities}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <div className="w-8 md:w-10">
            <img className="w-full h-full" src="/valid.webp" alt="" />
          </div>
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-semibold md:text-lg">Fee:</h4>
            <p className="text-xs font-mediun md:text-sm">{fee}</p>
          </div>
        </div>

        <div className="flex items-center justify-evenly  mt-5 md:justify-between">
          <button
            className=" bg-[var(--color-red)] text-[var(--color-white)]
        text-lg capitalize px-5 py-1 rounded-full cursor-pointer hover:bg-[var(--color-hover-red)] transition-all duration-100 
        md:px-8 md:py-2 "
          >
            start now
          </button>
          <button
            className=" border text-[var(--color-black)]
        text-lg capitalize px-5 py-1 rounded-full cursor-pointer hover:bg-[var(--color-red)] hover:border hover:text-[var(--color-white)] transition-all duration-100 
        md:px-8 md:py-2 "
          >
            learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
