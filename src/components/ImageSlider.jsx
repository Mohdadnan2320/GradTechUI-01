import React from "react";

const ImageSlider = () => {
  const images = [
    "asset 4.webp",
    "asset 5.webp",
    "asset 6.webp",
    "asset 7.webp",
    "asset 8.webp",
    "asset 4.webp",
    "asset 5.webp",
    "asset 6.webp",
    "asset 7.webp",
    "asset 8.webp",
  ];
  return (
    <div className="w-full  p-5 md:mb-10">
      <div className=" mt-5 md:my-10">
        <h1 className="text-2xl font-semibold text-[var(--color-white)] capitalize md:text-5xl lg:text-6xl xl:text-7xl"> 
          <span className="text-[var(--color-red)]">Instructor </span>
          from Top Companies
        </h1>
      </div>
      <div className="w-full overflow-hidden  mt-5 p-5 relative">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {images.concat(images).map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`slide-${index}`}
              className="w-40 h-40 mx-4 rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
