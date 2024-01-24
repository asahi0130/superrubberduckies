import React, { ChangeEvent, useEffect, useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import university from "../public/university.json";
import "animate.css";

function Giga() {
  return (
    <React.Fragment>
      <div className="animate__animated animate__slideInUp text-[#111B47] md:mt-16 mx-8 md:mx-48">
      <h1 className="text-4xl md:text-6xl font-semibold whitespace-nowrap mb-4">
          Keio University
        </h1>
        <h2 className="text-xl md:text-3xl font-semibold  mb-16">
        Global Information and Governance Academic Programme
        </h2>

        <img
          width={600}
          height={400}

          className="rounded-2xl shadow-[#111B47]  shadow-2xl"
          src="/images/giga.jpg"
        ></img>
      </div>

      <section className="">
        <h2 className="text-right mt-24 -mb-1 font-semibold text-4xl text-[#111B47] mx-8 md:mx-32">
          ABOUT
        </h2>
        <div className="bg-[#111B47] py-16 px-4">
          <div className="flex gap-y-12 md:gap-x-12 md:flex-row flex-col items-center mx-16 justify-center">
            <p className="text-white text-center text-lg md:w-1/2">
            "Global Information and Governance Academic Programme is a full-English programme allows students to develop problem-solving skills with integration of technology, science, design and governance fields. This course prepares students for unmatched careers in global enterprises in this rapidly changing era."
            </p>

            <Link href="/" target="_blank">

            <img
            className="hover:cursor-pointer active:opacity-80"
                width={200}
                height={200}
                src="/images/gigaphamplet.png"
              ></img>

              </Link>
          </div>
        </div>


<div>
  <h2 className="text-[#111B47] text-4xl text-center ml-8 mr-8 md:text-left md:ml-32 my-32 font-semibold">
APPLICATION TIMELINE
</h2>


</div>



      </section>
    </React.Fragment>
  );
}

export default Giga;
