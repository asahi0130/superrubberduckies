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


<section id="quiz">

  <section id="q1">
    <div className="bg-gray-200 rounded-lg mx-16 md:mx-64 h-[120px]">
      <h2>Question 1</h2>
      <p>Question?</p>
      <div className="flex justify-center gap-x-8">
      <button className=" bg-white textColor py-4 px-10 text-lg">Yes</button>
      <button className=" bg-white textColor py-4 px-10 text-lg">No</button>
      </div>
    </div>
  </section>

</section>


    


    </section>


  );
}

export default Quiz;
