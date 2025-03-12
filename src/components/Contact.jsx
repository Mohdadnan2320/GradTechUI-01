import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-full mt-5  p-5 md:mt-10">
      <div>
        <h1 className="text-2xl font-semibold text-[var(--color-white)] md:text-5xl xl:text-7xl">
          <span className="text-[var(--color-red)]"> Get </span>
          in touch
          <span className="text-[var(--color-red)]"> with </span>US
        </h1>
      </div>
      <div className="w-full mt-5 p-5">
        <form className="space-y-4 ">
          <div className="lg:flex lg:flex-wrap lg:justify-between lg:items-center lg:gap-5">
          <div className="w-2/6 my-5">
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full mt-1 p-2 border-b border-[var(--color-whiteborder)] outline-none text-[var(--color-white)]"
          />
        </div>
        <div  className="w-2/6 my-5">
          <input
            type="email"
            placeholder="E-mail"
            required
            className="w-full mt-1 p-2 border-b border-[var(--color-whiteborder)] outline-none text-[var(--color-white)]"
          />
        </div>
        <div  className="w-2/6 my-5">
          <input
            type="text"
            placeholder="Branch"
            required
            className="w-full mt-1 p-2 border-b border-[var(--color-whiteborder)] outline-none text-[var(--color-white)]"
          />
        </div>
        <div  className="w-2/6 my-5">
          <input
            type="number"
            placeholder="Contact Number"
            required
            className="w-full mt-1 p-2 border-b border-[var(--color-whiteborder)] outline-none text-[var(--color-white)]"
          />
        </div>
          </div>
          <div className="my-10">
            <textarea
              name="message"
              required
              className="w-full max-h-12 mt-1 p-2 border-b border-[var(--color-whiteborder)] outline-none text-[var(--color-white)]"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            className="my-5 bg-[var(--color-background)] text-[var(--color-black)]
        text-lg capitalize px-12 py-2 rounded-full hover:bg-[var(--color-red)] cursor-pointer border-none hover:border hover:text-[var(--color-white)] transition-all duration-100 "
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
