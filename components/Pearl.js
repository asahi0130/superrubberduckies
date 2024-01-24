import React, { ChangeEvent, useEffect, useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import university from "../public/university.json";
import "animate.css";

function Pearl() {
  return (
    <React.Fragment>
      <div className="text-[#111B47] md:mt-16 mx-8 md:mx-48">
      <h1 className="text-4xl md:text-6xl font-semibold whitespace-nowrap mb-4">
          Keio University
        </h1>
        <h2 className="text-xl md:text-3xl font-semibold  mb-16">
        Programme in Economics for Alliances, Research and Leadership
        </h2>

        <img
          width={600}
          height={400}

          className="rounded-2xl shadow-[#111B47]  shadow-2xl"
          src="/images/pearl.jpg"
        ></img>
      </div>

      <section className="">
        <h2 className="text-right mt-24 -mb-1 font-semibold text-4xl text-[#111B47] mx-8 md:mx-32">
          ABOUT
        </h2>
        <div className="bg-[#111B47] py-16 px-4">
          <div className="flex gap-y-12 md:gap-x-12 md:flex-row flex-col items-center mx-16 justify-center">
            <p className="text-white text-center text-lg md:w-1/2">
"Programme in Economics for Alliances, Research and Leadership is a full-English programme which provides BA in economics. It has objective to turn out energetic pioneers with a firm mental establishment in financial matters, who will be all inclusive dynamic totally difference callings."
            </p>

            <Link href="/" target="_blank">

            <img
            className="hover:cursor-pointer active:opacity-80"
                width={200}
                height={200}
                src="/images/pearlphamplet.jpeg"
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

export default Pearl;
