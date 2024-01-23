import React, { ChangeEvent, useEffect, useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import university from "../public/university.json";
import "animate.css";

function Giga() {
  return (
    <React.Fragment>
      <div className="text-[#111B47] md:mt-16 mx-8 md:mx-48">
        <h1 className="text-3xl font-semibold whitespace-nowrap mb-4">
          Keio University
        </h1>
        <h2 className="text-xl font-semibold whitespace-nowrap mb-16">
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
        <div className="bg-[#111B47] py-8 px-4">
          <div className="flex gap-y-12 md:gap-x-12 md:flex-row flex-col items-center mx-16 justify-center">
            <p className="text-white text-center text-lg md:w-1/2">
              “Giga...”
            </p>

            <img
            className=""
                width={200}
                height={200}
                src="/images/Gigaphamplet.jpeg"
              ></img>
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
