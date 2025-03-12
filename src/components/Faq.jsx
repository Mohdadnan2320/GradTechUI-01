// import React, { useState } from 'react';

// const Faq = () => {
//     const faqs = [
//         {
//           question: "What is React?",
//           answer: "React is a JavaScript library for building user interfaces.",
//         },
//         {
//           question: "What is Tailwind CSS?",
//           answer: "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
//         },
//         {
//           question: "How do I use this FAQ?",
//           answer: "Click on any question to toggle the answer.",
//         },
//       ];

//       const FAQItem = ({ faq, isOpen, toggle }) => {
//         return (
//           <div className="border-b border-gray-300">
//             <button
//               className="w-full text-left p-4 font-semibold flex justify-between items-center hover:bg-gray-100"
//               onClick={toggle}
//             >
//               {faq.question}
//               <span>{isOpen ? "▲" : "▼"}</span>
//             </button>
//             {isOpen && <p className="p-4 text-gray-700">{faq.answer}</p>}
//           </div>
//         );
//       };

//       const FAQ = () => {
//         const [openIndex, setOpenIndex] = useState(null);

//         const toggleFAQ = (index) => {
//           setOpenIndex(openIndex === index ? null : index);
//         };
//   return (
// <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
//       {faqs.map((faq, index) => (
//         <FAQItem
//           key={index}
//           faq={faq}
//           isOpen={openIndex === index}
//           toggle={() => toggleFAQ(index)}
//         />
//       ))}
//     </div>
//   );
// }

// export default Faq;

import React, { useState } from "react";

const faqs = [
  {
    question:
      "What are the eligibility criteria to apply for Gradtech's programs?",
    answer:
      "At GradTech, we believe in providing equal opportunities for everyone to embark on a successful career in tech. Our programs are open to individuals from diverse backgrounds. To be eligible for the program, you should be either in the final year of your graduation/diploma or have already completed your graduation/diploma.",
  },
  {
    question:
      "    What is the duration of the program?",
    answer:
      "The duration of our program typically ranges from 3 to 7 months, depending on the specific program you choose to pursue. You can visit our courses page to get exact duration of course.",
  },
  {
    question:
      "Does GradTech provide interview preparation support?",
    answer:
      "Absolutely! we offer comprehensive interview preparation assistance. Our dedicated placement team will guide you in crafting a compelling resume, optimizing your LinkedIn profile, and conducting unlimited mock interviews to help you ace your job interviews",
  },
];


const FAQItem = ({ faq, isOpen, toggle }) => {
  return (
    <div className="border-b border-[var(--color-whiteborder)] py-5">
      <button
        className="w-full text-sm text-[var(--color-white)] text-left p-4 font-medium flex justify-between items-center
        md:text-xl"
        onClick={toggle}
      >
        {faq.question}
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <p className="p-4 text-xs  text-[var(--color-white)] md:text-lg">{faq.answer}</p>}
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full h-full  bg-[var(--color-background-secondary)] mt-5 p-5 md:mt-10">
      <div>
        <h1 className="text-2xl font-semibold text-[var(--color-white)] md:text-5xl xl:text-7xl">
          Frequently Asked
          <span className="text-[var(--color-red)]"> Questions</span>
        </h1>
      </div>
      <div className="mx-auto mt-5 shadow-lg rounded-lg overflow-hidden md:mx-0">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            toggle={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
