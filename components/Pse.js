import React, { ChangeEvent, useEffect, useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import university from "../public/university.json";
import "animate.css";

function Pse() {
  return (
    <React.Fragment>
      <div className="animate__animated animate__slideInUp text-[#800000] md:mt-16 mx-8 md:mx-48">
      <h1 className="text-4xl md:text-6xl font-semibold whitespace-nowrap mb-4">
          Waseda University
        </h1>
        <h2 className="text-xl md:text-3xl font-semibold mb-16">
        School of Political Science and Economics
        </h2>

        <img
          width={600}
          height={400}

          className="rounded-2xl shadow-[#800000]  shadow-2xl"
          src="/images/pse.jpg"
        ></img>
      </div>

      <section className="">
        <h2 className="text-right mt-24 -mb-1 font-semibold text-4xl text-[#800000] mx-8 md:mx-32">
          ABOUT
        </h2>
        <div className="bg-[#800000] py-16 px-4">
          <div className="flex gap-y-12 md:gap-x-12 md:flex-row flex-col items-center mx-16 justify-center">
            <p className="text-white text-center text-lg md:w-1/2">
"School of Political Science and Economics is a full-English programme develops students with strong leadership skills within international society. This course provides clonal-standard classes with highest quality. This consist of Japanese and Global Political Economy, Political Science and Economics, Quantitative Approaches to Political Science and Economics and finally Seminars."
            </p>

            <Link href="/" target="_blank">

            <img
            className="hover:cursor-pointer active:opacity-80"
                width={200}
                height={200}
                src="/images/psephamplet.jpeg"
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

export default Pse;
