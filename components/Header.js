import React, { use, useEffect, useState } from "react";
import Link from 'next/link'
import { useRouter } from "next/router";
import Image from "next/image";
import 'animate.css';

export default function Header() {
const [kheader, setKheader] = useState(false)
const [wheader, setWheader] = useState(false)
const [active, setActive] = useState(false);


useEffect(() => {
  setKheader(false)
  setWheader(false)
  },[active])


    const handleClick = () => {
        setActive(!active);
      };

    const selected =
    "block py-2 pr-4 pl-3 textColor bg-blue-500 rounded md:bg-transparent md:text-blue-500 md:p-0";
  const notselected =
    "block py-2 pr-4 pl-3 md:border-0  md:p-0 text-gray-400 md:hover:textColor hover:bg-gray-700 hover:textColor md:hover:bg-transparent border-gray-700";


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

<nav className={`transition-all border-gray-200 pl-1 sm:px-4 pt-4 headerColor  pb-4`}>
<div className=" flex flex-wrap justify-between items-center mx-4 md:mx-24 md:mr-0 ">

<Link href="/" className="animate__animated animate__slideInLeft flex items-center">

    <img src="/images/icon.png" className="mr-3 h-9 sm:h-12" alt="Logo" />
    <span className="self-center text-lg font-semibold whitespace-nowrap textColor robotoFont">
    WeChoose
    </span>

  </Link>



  <button
    onClick={handleClick}
    data-collapse-toggle="mobile-menu"
    type="button"
    className=" animate__animated animate__slideInRight  inline-flex items-center p-2 ml-3 text-sm  rounded-lg md:hidden  focus:outline-none  text-gray-400  active:opacity-80"
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


  <ul className={` animate__animated animate__slideInRight flex flex-col  md:flex-row w-full md:w-auto md:gap-x-16  `} id="mobile-menu1">
  {/* <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium"> */}

  <li key={"HeaderInfo1"} className="textColor flex flex-row justify-center items-center gap-x-5 md:mt-0 mt-2 group relative">
    <div className={`${active ? "" : "hidden "}md:py-0 py-4 w-full md:block md:w-auto`}>
        <button className=" textColor border-b md:border-none font-extrabold w-full justify-center flex items-center text-center hover:text-[#FFC700] transition-all">
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{`Keio`}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </button>
        <div className="md:absolute w-full left-0 mt-2 bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity ">
            <div className="flex flex-col items-stretch">
                {/* Flyout Menu Items Here */}
                <a href="/university/giga" className="px-6 py-2 text-base  textColor text-center hover:bg-gray-100">GIGA</a>
                <a href="/university/pearl" className="px-6 py-2 text-base  textColor text-center hover:bg-gray-100">PEARL</a>
                {/* Add more menu items as needed */}
            </div>
        </div>
    </div>
</li>


<li key={"HeaderInfo2"} className="textColor flex flex-row justify-center items-center gap-x-5 md:mt-0 relative group">
    <div className={`${active ? "" : "hidden "}md:py-0 py-4 w-full md:block md:w-auto`}>
        <button className="textColor border-b md:border-none font-extrabold w-full justify-center flex items-center text-center hover:text-[#800000] transition-all">
          Waseda&nbsp;&nbsp; &nbsp;&nbsp;
        </button>
        <div className="absolute w-full left-0 mt-2 bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex flex-col items-stretch">
                {/* Flyout Menu Items Here */}
                <a href="/university/pse" className="px-6 py-2 text-base  textColor text-center hover:bg-gray-100">PSE</a>
                <a href="/university/sils" className="px-6 py-2 text-base  textColor text-center hover:bg-gray-100">SILS</a>
                {/* Add more menu items as needed */}
            </div>
        </div>
    </div>
</li>



        
        <li key={"HeaderInfo3"} className={` textColor flex flex-row justify-center items-center gap-x-5 md:mt-0 mt-16 `}>
                  <div
    className={`${active ? "" : "hidden "}md:py-0 py-4  w-full md:block md:w-auto`}
    id="mobile-menu4"
  >
          <button onClick={() => navigateAndScroll("/quiz/", "")}  className="text-white bg-[#121272] px-8 py-2 rounded-md border-b md:border-none font-extrabold w-full justify-center flex  items-center text-center hover:opacity-80 active:opacity-60 active:scale-105 transition-all">
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