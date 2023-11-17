import React, { use, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Script from "next/script";
import { useRouter } from "next/router";
import university from '../public/university.json'
import UniversityCard from '../components/UniversityCard'

//END OF IMPORTS

function Quiz() {


  // START HERE
  return (


<section className=" overflow-x-hidden overflow-y-hidden">



<Toaster position="bottom-right" />


{/* top */}

<section id="top">

<h1 className="text-xl text-center my-8 titlefont textColor">English College Picker</h1>
<h1 className="md:text-3xl text-3xl text-center my-8 titlefont textColor">QUIZ - College Match Test</h1>

</section>



{/* Quiz */}


<section id="quiz" className="">

  <section className="my-24" id="q1">
    <div className="relative bg-gray-200 rounded-lg mx-16 md:mx-36 lg:mx-72 textColor pt-16 pb-8">
      <h2 className="text-6xl absolute z-40 -top-4 ml-4 font-extrabold">1</h2>
<span className="absolute top-2 text-4xl">____</span>
      <p className="ml-8 text-lg">Are you more of a city person or out-skirt person?</p>
      <div className="mt-4 flex justify-center gap-x-8">
      <button className=" bg-white textColor py-4 px-10 text-lg hover:bg-gray-100 active:opacity-80">Yes</button>
      <button className=" bg-white textColor py-4 px-10 text-lg hover:bg-gray-100 active:opacity-80">No</button>
      </div>
    </div>
  </section>

  <section className="my-24" id="q2">
    <div className="relative bg-gray-200 rounded-lg mx-16 md:mx-36 lg:mx-72 textColor pt-16 pb-8">
      <h2 className="text-6xl absolute z-40 -top-4 ml-4 font-extrabold">2</h2>
<span className="absolute top-2 text-4xl">____</span>
      <p className="ml-8 text-lg">Are you more of a city person or out-skirt person?</p>
      <div className="mt-4 flex justify-center gap-x-8">
      <button className=" bg-white textColor py-4 px-10 text-lg hover:bg-gray-100 active:opacity-80">Yes</button>
      <button className=" bg-white textColor py-4 px-10 text-lg hover:bg-gray-100 active:opacity-80">No</button>
      </div>
    </div>
  </section>




{/* RESULT */}

<section className="my-24" id="result">
    <div className="relative bg-gray-200 rounded-lg mx-16 md:mx-36 lg:mx-72 textColor pt-16 pb-8">
      <h2 className="text-7xl absolute z-40 -top-8 ml-4 font-extrabold left-1/2 transform -translate-x-1/2">Results</h2>
<span className="absolute top-2 text-4xl left-1/2 transform -translate-x-1/2">_____</span>
      <p className="ml-8 text-lg">result...</p>

    </div>
  </section>



</section>


    


    </section>


  );
}

export default Quiz;
