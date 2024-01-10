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



  const rankingTuition = {rank: ["PSE(Waseda)", "PEARL(Keio)", "GIGA(Keio)", "SILS(Waseda)"], name:"Tuition"}

  const rankingInternational = {rank: ["GIGA(Keio)", "SILS(Waseda)", "PEARL(Keio)", "PSE(Waseda)"], name:"International Students"}
  
  const rankingAcceptance = {rank: ["PSE(Waseda)", "SILS(Waseda)", "PEARL(Keio)", "GIGA(Keio)"], name:"Acceptance Rate"}

  const rankingAcademic = {rank: ["GIGA(Keio)", "PEARL(Keio)", "SILS(Waseda)", "PSE(Waseda)"], name:"Academic"}


  const [ranking, setRanking] = useState<any>(rankingTuition)


  // START HERE
  return (




    <section className="  overflow-x-hidden overflow-y-hidden">


<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Lato&family=Merriweather+Sans&family=Sigmar+One&display=swap" rel="stylesheet"></link>

{/* <NextSeo title={title}description={description}/> */}
<Toaster position="bottom-right" />


{/* top */}

<section className="mb-56" id="top">

<h1 className="md:text-5xl text-3xl text-center  robotoFont textColor lg:mb-24 md:my-16 my-10 ">English College Picker</h1>

<section className="" id="uni">


<div className="flex flex-row relative">
<img className="absolute -left-16" height={128} width={128} src="/images/keio.png" />
<img className="absolute -right-16 top-96 md:top-64 lg:top-0" height={128} width={128} src="/images/waseda.png" /> 
</div>


<div className="container px-24 mb-24 mx-auto  rounded-lg py-6 ">


<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-4 gap-x-8">


{university.map((b, index) => (
<React.Fragment key={index}>
<UniversityCard b={b} index={index}/>
</React.Fragment>))}

</div>
</div>
</section>
</section>



{/* uni */}



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
<button className="bg-gray-200 text-sm md:text-xl py-2 hover:bg-gray-300 active:opacity-80 w-full rounded-lg">Diversity</button>
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
    



{/* container */}
<div className="flex flex-col md:flex-row md:justify-evenly ">
{/* ranking */}
  <section className="md:w-1/2 lg:w-1/4 justify-between mb-12 md:mb-0" id="ranking">
<h2 className="text-center robotoFont textColor text-3xl underline font-semibold mb-4 ">
RANKING
</h2>
<h3 className="text-center robotoFont textColor text-2xl mb-6 ">
{ranking.name}

</h3>
<div className="flex flex-row justify-evenly">
  <div className="flex flex-col">
<button onClick={() => setRanking(rankingTuition)} className="mb-4 mr-8 robotoFont textColor text-base hover:underline hover:cursor-pointer">TUITION FEE</button>
<button onClick={() => setRanking(rankingInternational)} className="mb-4 mr-8 robotoFont textColor text-base hover:underline hover:cursor-pointer">INTERNATIONAL STUDENTS</button>
<button onClick={() => setRanking(rankingAcceptance)} className="mb-4 mr-8 robotoFont textColor text-base hover:underline hover:cursor-pointer">ACCEPTANCE RATE</button>
<button onClick={() => setRanking(rankingAcademic)} className="mb-4 mr-8 robotoFont textColor text-base hover:underline hover:cursor-pointer">ACADEMIC</button>
</div>

<div className="flex flex-col">
{ranking.rank.map((u: any, index: any) => (
  <div className="flex flex-row">
    <p className="mb-4 robotoFont textColor text-2xl ">
    {index+1}.&nbsp;
    </p>
    <p className="mb-4 robotoFont textColor text-2xl underline ">
      {u}
    </p>
  </div>
))}
</div>


</div>


  </section>

{/* upcoming events */}
<section className="md:w-1/2 lg:w-1/4 justify-between mb-12 md:mb-0" id="upcomingevents">

<h2 className="text-center robotoFont textColor text-3xl underline font-semibold mb-10 ">
UPCOMING EVENTS
</h2>


<div className="flex flex-row justify-evenly">


  <div className="flex flex-col">



<div className="flex flex-row items-center">
<h4 className="robotoFont textColor text-2xl mb-4 text-left mr-8 font-semibold">GIGA</h4>
<div className="bg-gray-200 text-left px-8 py-4  w-full">
  asd
</div>
</div>


<div className="flex flex-row items-center">
<h4 className="robotoFont textColor text-2xl mb-4 text-left mr-8 font-semibold">PEARL</h4>
<div className="bg-gray-200 text-left px-8 py-4  w-full">
  asd
</div>
</div>

<div className="flex flex-row items-center">
<h4 className="robotoFont textColor text-2xl mb-4 text-left mr-8 font-semibold">SILS</h4>
<div className="bg-gray-200 text-left px-8 py-4  w-full">
  asd
</div>
</div>

<div className="flex flex-row items-center">
<h4 className="robotoFont textColor text-2xl mb-4 text-left mr-8 font-semibold">PSE</h4>
<div className="bg-gray-200 text-left px-8 py-4  w-full">
  asd
</div>
</div>

</div>




</div>

</section>
</div>






    </section>






  );
}

export default Home;
