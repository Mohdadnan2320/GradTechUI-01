// import { useState } from "react";
// import { Link } from "react-router";
// import { HiOutlineMenuAlt4 } from "react-icons/hi";
// const Navbar = () => {
//   const [showSidebar, setShowSidebar] = useState(false);

//   const data = [
//     {
//       path: "/",
//       name: "Home",
//     },
//     {
//       path: "/about",
//       name: "About",
//     },
//     {
//       path: "/podcast",
//       name: "Podcast",
//     },
//     {
//       path: "/short_video",
//       name: "Short Video",
//     },
//     {
//       path: "/motion_graphic",
//       name: "Motion Graphic",
//     },
//     {
//       path: "/explainer_video",
//       name: "Explainer Video",
//     },
//     {
//       path: "/trailer_teaser",
//       name: "Trailer : Teaser",
//     },
//   ];
//   return (
//     <div className="flex flex-col items-center justify-center p-5 sticky top-0 border-b-[1px] rounded-b-sm 
//     bg-[var(--color-background)]">
//       <>
//         {showSidebar ? (
//           <button
//             className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
//             onClick={() => setShowSidebar(!showSidebar)}
//           >
//             x
//           </button>
//         ) : (
//           <div className="w-full  flex justify-between items-center lg:justify-center">
//             <div className="lg:hidden">
//             <h1 className="text-base font-semibold  ">Grad<span className="text-[var(--color-red)]">Tech</span></h1>
//             </div>
//             <div className="hidden lg:flex lg:w-28 lg:justify-around ">
//               <ul>
//                 <Link to={"/"}>Home</Link>
//               </ul>
//               <ul>
//                 <Link to={"/about"}>About</Link>
//               </ul>
//             </div>

//             <HiOutlineMenuAlt4
//             size={25}
//               onClick={() => setShowSidebar(!showSidebar)}
//               className="flex items-center cursor-pointer lg:hidden "
//             />

//             {/* <svg
//               fill="#2563EB"
//               viewBox="0 0 100 80"
//               width="30"
//               height="30"
//             >
//               <rect width="100" height="10"></rect>
//               <rect y="30" width="100" height="10"></rect>
//               <rect y="60" width="100" height="10"></rect>
//             </svg> */}
//           </div>
//         )}

//         <div
//           className={`top-0 right-0 w-[75vw] bg-blue-600  p-5 text-white fixed h-full z-40  ease-in-out duration-300 ${
//             showSidebar ? "translate-x-0 " : "translate-x-full"
//           }`}
//         >
//           <div className="mt-20 text-4xl w-full text-nowrap font-semibold text-white">
//             {data.map((item, i) => {
//               return (
//                 <ul key={i}>
//                   <Link to={item.path}>{item.name}</Link>
//                 </ul>
//               );
//             })}
//           </div>
//         </div>
//       </>
//     </div>
//   );
// };

// export default Navbar;


import { useState, useEffect } from "react";
import { Link } from "react-router";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  // Disable scrolling when sidebar is open
  useEffect(() => {
    if (showSidebar) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showSidebar]);

  const data = [
    { path: "/", name: "Home" , active: "--color-red"},
    { path: "/courses", name: "Courses" },
    { path: "/jobs", name: "Jobs" },
    { path: "/hire", name: "Hire from us" },
    { path: "/events", name: "Events" },
    { path: "/session", name: "Sessions" },
    { path: "/contact", name: "Contact us" },
  ];


  return (
    <div className="flex flex-col items-center justify-center p-5 z-20 sticky top-0 border-b  bg-[var(--color-background)]
    lg:static">
      {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(false)}
        >
          x
        </button>
      ) : (
        <div className="w-full flex justify-between items-center lg:justify-center">
          <div className="lg:w-1/2">
            <h1 className="text-base font-bold">
              Grad<span className="text-[var(--color-red)]">Tech</span>
            </h1>
          </div>
          <div className="hidden lg:w-1/2 lg:flex  lg:justify-around">
          {data.map((item, i) => (
            <ul key={i} className="my-3 md:my-5 lg:my-0 ">
              <Link className={`text-xs ${item.active ? "text-[var(--color-red)]" : "text-[var(--color-black)]"}`} to={item.path}>{item.name}</Link>
            </ul>
          ))}
          </div>
          <HiOutlineMenuAlt4
            size={25}
            onClick={() => setShowSidebar(true)}
            className="flex items-center  cursor-pointer lg:hidden"
          />
        </div>
      )}

      <div
        className={`top-0 right-0 w-[75vw] bg-[var(--color-background-secondary)] p-5 text-white fixed h-full z-40 ease-in-out duration-300
          md:w-[55vw] ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mt-20 text-4xl w-full text-nowrap font-semibold text-white">
          {data.map((item, i) => (
            <ul key={i} className="my-3 md:my-5">
              <Link to={item.path}>{item.name}</Link>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
