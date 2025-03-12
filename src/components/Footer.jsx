import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full bg-[var(--color-background)] p-5">
      <div className=" mt-5 md:mt-10">
        <h1 className="text-2xl font-bold capitalize md:text-3xl">
          Grad
          <span className="text-[var(--color-red)]">Tech </span>
        </h1>
        <p className="mt-5 text-sm font-medium md:text-lg">
          At GradTech, we're not just another EdTech platform. We're on a
          mission to reshape the engineering landscape, balance the engineering
          sector crafting engineers primed for real-world transformation. We
          want to reshape the engineering dimensions .
        </p>
      </div>
      <div className="lg:flex lg:justify-between lg:items-start lg:mt-10">
        <div className="w-full  my-5 ">
          <h4 className="text-sm font-semibold capitalize md:text-lg">Courses</h4>
          <div className="flex flex-col gap-3 mt-5">
            <a className="text-xs font-medium md:text-sm">Mechanical</a>
            <a className="text-xs font-medium md:text-sm">Civil</a>
            <a className="text-xs font-medium md:text-sm">Electrical</a>
            <a className="text-xs font-medium md:text-sm">Information and technology</a>
            <a className="text-xs font-medium md:text-sm">Plastic and mould</a>
            <a className="text-xs font-medium md:text-sm">Architectural engineering</a>
          </div>
        </div>

        <div className="w-full  my-5 ">
          <h4 className="text-sm font-semibold capitalize md:text-lg">Quick links</h4>
          <div className="flex flex-col gap-3 mt-5">
            <a className="text-xs font-medium md:text-sm">About US</a>
            <a className="text-xs font-medium md:text-sm">Counselling</a>
            <a className="text-xs font-medium md:text-sm">Enroll</a>
            <a className="text-xs font-medium md:text-sm">Help</a>
            <a className="text-xs font-medium md:text-sm">Term and condtions</a>
          </div>
        </div>

        <div className="w-full  my-5 ">
          <h4 className="text-sm font-semibold capitalize md:text-lg">Office</h4>
          <div className="flex flex-col gap-3 mt-5">
            <a className="text-xs font-medium md:text-sm">HSR layout, Banglore,India</a>
            <a className="text-xs font-medium md:text-sm">anshuman@gradtech.in</a>
            <a className="text-xs font-medium md:text-sm">+918181981251</a>
            <a className="text-xs font-medium md:text-sm">+917905014657</a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-10 mb-2">
        <div className="w-1/2">
          <p className="text-xs md:text-lg lg:text-sm">Connect with Us</p>
        </div>
        <div className="w-2/6 flex items-center justify-between lg:w-1/6">
            <FaFacebookF  className=" cursor-pointer hover:-translate-y-1 transition-all duration-200 text-xs md:text-base"/>
            <CgMail  className="cursor-pointer hover:-translate-y-1 transition-all duration-200 text-xs md:text-base"/>
            <FaInstagram className="cursor-pointer hover:-translate-y-1 transition-all duration-200 text-xs md:text-base"/>
            <FaLinkedinIn  className="cursor-pointer hover:-translate-y-1 transition-all duration-200 text-xs md:text-base"/>
            <FaWhatsapp  className="cursor-pointer hover:-translate-y-1 transition-all duration-200 text-xs md:text-base"/>
        </div>
      </div>

      <hr />

      <div className="flex flex-wrap items-center justify-between gap-5 mt-5">
        <div className="">
            <p className="text-xs md:text-sm">© 2024 Copyright: GradTech.in</p>
        </div>
        <div>
        <h1 className="text-sm font-semibold capitalize">
          Grad
          <span className="text-[var(--color-red)]">Tech </span>
        </h1>
        </div>
        <div>
            <p className="text-xs md:text-sm">
            Code By: Mohd Adnan
            </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

