import React, { use, useEffect, useState } from "react";
import Link from 'next/link'
import { useRouter } from "next/router";
import Image from "next/image";

export default function Header() {


    const handleClick = () => {
        setActive(!active);
      };

    const selected =
    "block py-2 pr-4 pl-3 textColor bg-blue-500 rounded md:bg-transparent md:text-blue-500 md:p-0";
  const notselected =
    "block py-2 pr-4 pl-3 md:border-0  md:p-0 text-gray-400 md:hover:textColor hover:bg-gray-700 hover:textColor md:hover:bg-transparent border-gray-700";
  const [active, setActive] = useState(false);


function notLoading(e){
    e.target.src="/icon.png"
}


const router = useRouter();

const navigateAndScroll = (path, id) => {
  router.push(path).then(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  });
};


    return(<>

<nav className={`transition-all border-gray-200 pl-1 sm:px-4 pt-4 headerColor shadow-md pb-4`}>
<div className=" flex flex-wrap justify-between items-center mx-4 md:mx-24 md:mr-0">

<Link href="/" className="flex items-center">

    <img src="/images/icon.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
    <span className="self-center text-lg font-semibold whitespace-nowrap textColor">
    English College Picker
    </span>

  </Link>



  <button
    onClick={handleClick}
    data-collapse-toggle="mobile-menu"
    type="button"
    className="inline-flex items-center p-2 ml-3 text-sm  rounded-lg md:hidden  focus:outline-none  text-gray-400  active:opacity-80"
    aria-controls="mobile-menu"
    aria-expanded="false"
  >
    <span className="sr-only">Open main menu</span>
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      ></path>
    </svg>
    <svg
      className="hidden w-6 h-6"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  </button>











  <ul className={` flex flex-col  md:flex-row w-full md:w-auto md:gap-x-16  `} id="mobile-menu1">
  {/* <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium"> */}

        <li key={"HeaderInfo1"} className={` textColor flex flex-row justify-center items-center gap-x-5 md:mt-0 mt-2 `}>
                  <div
    className={`${active ? "" : "hidden "}md:py-0 py-4  w-full md:block md:w-auto`}
    id="mobile-menu2"
  >
          <button onClick={() => navigateAndScroll("/", "top")}   className="textColor border-b md:border-none w-full justify-center flex  items-center text-center hover:opacity-80 active:opacity-60 active:scale-105 transition-all">
          Home
          </button>
          </div>
        </li>
        <li key={"HeaderInfo2"} className={` textColor flex flex-row justify-center items-center gap-x-5 md:mt-0  `}>
                  <div
    className={`${active ? "" : "hidden "}md:py-0 py-4  w-full md:block md:w-auto`}
    id="mobile-menu3"
  >
          <button onClick={() => navigateAndScroll("/", "flow")}  className="textColor border-b md:border-none w-full justify-center flex  items-center text-center hover:opacity-80 active:opacity-60 active:scale-105 transition-all">
          Programs
          </button>
          </div>
        </li>
        <li key={"HeaderInfo3"} className={` textColor flex flex-row justify-center items-center gap-x-5 md:mt-0  `}>
                  <div
    className={`${active ? "" : "hidden "}md:py-0 py-4  w-full md:block md:w-auto`}
    id="mobile-menu4"
  >
          <button onClick={() => navigateAndScroll("/quiz/", "")}  className="textColor border-b md:border-none w-full justify-center flex  items-center text-center hover:opacity-80 active:opacity-60 active:scale-105 transition-all">
          Quiz
          </button>
          </div>
        </li>


        <li key={"HeaderInfoLogin"}>
        <div
    className={`${active ? "" : "hidden"} md:py-0 py-4 w-full md:block md:w-auto`}
    id="mobile-menu7"
  >

  </div>
        </li>
      </ul>












</div>
</nav>


</>)



      }