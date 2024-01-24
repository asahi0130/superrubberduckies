import React, { ChangeEvent, useEffect, useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import university from "../public/university.json";
import "animate.css";

function Sils() {

  function openPhamplet(){
    window.open("google.com")
  }

  return (
    <React.Fragment>
      <div className="animate__animated animate__slideInUp text-[#800000] md:mt-16 mx-8 md:mx-48">
        <h1 className="text-4xl md:text-6xl font-semibold whitespace-nowrap mb-4">
          Waseda University
        </h1>
        <h2 className="text-xl md:text-3xl font-semibold  mb-16">
          School of International Liberal Arts
        </h2>
        <img
          width={600}
          height={400}
          className="rounded-2xl shadow-[#800000]  shadow-2xl"
          src="/images/sils.jpg"
        ></img>


      </div>

      <section className="">
        <h2 className="text-right mt-24 -mb-1 font-semibold text-5xl text-[#800000] mx-8 md:mx-32">
          ABOUT
        </h2>
        <div className="bg-[#800000] py-16 px-4">
          <div className="flex gap-y-12 md:gap-x-12 md:flex-row flex-col items-center mx-16 justify-center">
            <p className="text-white text-center text-lg md:w-1/2">
              “SILS aims students to develop problem-solving skill for
              globalising world, conscious of their cultural identity but also
              develop multicultural society, concrete foundation of broad
              academic fields with strong interests in innovative,
              interdisciplinary scholarly pursuits, express their own views in
              foreign language”
            </p>
            <Link href="https://www.waseda.jp/fire/sils/assets/uploads/2023/09/2024_September_Guideline_1.0.pdf" target="_blank">

            <img
            className="hover:cursor-pointer active:opacity-80"
                width={200}
                height={200}
                src="/images/silsphamplet.jpeg"
              ></img>

              </Link>
          </div>
        </div>


<div>
  <h2 className="text-[#800000] text-4xl text-center ml-8 mr-8 md:text-left md:ml-32 my-32 font-semibold">
APPLICATION TIMELINE
</h2>


</div>



      </section>
    </React.Fragment>
  );
}

export default Sils;
