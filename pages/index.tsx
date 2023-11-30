import React, { use, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Script from "next/script";
import { useRouter } from "next/router";
import university from '../public/university.json'
import UniversityCard from '../components/UniversityCard'

//END OF IMPORTS

function Home() {


  const title = "Title"
  const description = "Descriotion"




  // START HERE
  return (




    <section className="  overflow-x-hidden overflow-y-hidden">


<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Lato&family=Merriweather+Sans&family=Sigmar+One&display=swap" rel="stylesheet"></link>

{/* <NextSeo title={title}description={description}/> */}
<Toaster position="bottom-right" />


{/* top */}

<section id="top">

<h1 className="md:text-5xl text-3xl text-center my-8 titlefont textColor">English College Picker</h1>

</section>



{/* uni */}

<section className="" id="uni">

<div className="container px-8 mb-24 mx-auto  rounded-lg py-6 ">

<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-4 gap-x-12">


{university.map((b, index) => (
<React.Fragment key={index}>
<UniversityCard b={b} index={index}/>
</React.Fragment>))}

</div>
</div>
</section>


{/* 
<hr className="h-px my-16 bg-gray-300 mx-16 border-0" />
<img src="/images/keio.png" />
<img src="/images/waseda.png" /> */}

<hr className="h-px my-16 bg-gray-300 mx-16 border-0" />


<section id="choice" className="text-white mb-32 ">
  <div className="pearl mx-16 md:mx-36 lg:mx-72 rounded-2xl  pt-4 pb-12">

<h2 className="text-3xl text-center my-4">Choose By</h2>

<div className="textColor  flex flex-row gap-x-4 text-center justify-between mx-4 md:mx-12 mb-16">
<button className="bg-gray-200 text-sm md:text-xl py-2 hover:bg-gray-300 active:opacity-80 w-full rounded-lg">City Life</button>
<button className="bg-gray-200 text-sm md:text-xl py-2 hover:bg-gray-300 active:opacity-80 w-full rounded-lg">Research</button>
<button className="bg-gray-200 text-sm md:text-xl py-2 hover:bg-gray-300 active:opacity-80 w-full rounded-lg">Research</button>
</div>


<div className="textColor grid grid-col-1 `md:grid-cols-2 gap-y-8 gap-x-4 md:gap-x-12 mx-4 md:mx-12 lg:mx-24">
<div className="bg-white text-center rounded-xl px-4 py-12 text-2xl">
  GIGA
</div>
<div className="bg-white text-center rounded-xl px-4 py-12 text-2xl">
  SILS
</div>
<div className="bg-white text-center rounded-xl px-4 py-12 text-2xl">
  PEARL
</div>
<div className="bg-white text-center rounded-xl px-4 py-12 text-2xl">
  PSE
</div>



</div>

  </div>

</section>
    


    </section>


  );
}

export default Home;
