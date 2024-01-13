import React, { use, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Script from "next/script";
import { useRouter } from "next/router";
import university from '../public/university.json'
import UniversityCard from '../components/UniversityCard'
import 'animate.css';


//END OF IMPORTS

function Home() {


  const title = "Title"
  const description = "Descriotion"



  const rankingTuition = {rank: ["PSE(Waseda)", "PEARL(Keio)", "GIGA(Keio)", "SILS(Waseda)"], name:"Tuition"}

  const rankingInternational = {rank: ["GIGA(Keio)", "SILS(Waseda)", "PEARL(Keio)", "PSE(Waseda)"], name:"International Students"}
  
  const rankingAcceptance = {rank: ["PSE(Waseda)", "SILS(Waseda)", "PEARL(Keio)", "GIGA(Keio)"], name:"Acceptance Rate"}

  const rankingResearch = {rank: ["GIGA(Keio)", "PEARL(Keio)", "SILS(Waseda)", "PSE(Waseda)"], name:"Research"}


  const [ranking, setRanking] = useState<any>(rankingTuition)


  // START HERE
  return (




    <section className="  overflow-x-hidden overflow-y-hidden">


<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href='https://fonts.googleapis.com/css2?family=Lato&family=Merriweather+Sans&family=Roboto:wght@400;500;700&family=Sigmar+One&display=swap&family=Merriweather:wght@400;700&display=swap' rel="stylesheet"></link>

{/* <NextSeo title={title}description={description}/> */}
<Toaster position="bottom-right" />


{/* top */}

<section className="mb-56" id="top">

<h1 className="md:text-8xl text-5xl text-center  mx-auto sigfont textColor font-bold lg:mb-72 md:mt-24 md:mb-32 mb-32 lg:w-7/12">English College Picker</h1>
{/* ml-8 md:ml-32 */}

<div className="flex flex-row relative">
<img className="absolute -left-16 md:bottom-48 " height={128} width={128} src="/images/keio.png" />
<img className="absolute -right-16 md:bottom-48" height={128} width={128} src="/images/waseda.png" /> 
</div>

{/* why */}
<section className="mx-8 ">
<h2>Why KEIO and WASEDA?</h2>
<div className="border-2 rounded-lg">
  <img></img>
  <p>a</p>
</div>
</section>

<section className="" id="uni">



{/* <div className="flex flex-row relative">
<img className="absolute -left-16" height={128} width={128} src="/images/keio.png" />
<img className="absolute -right-16 top-96 md:top-64 lg:top-0" height={128} width={128} src="/images/waseda.png" /> 
</div> */}


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

{/* ranking */}
<section className="">
  <h2 className="text-[#37447E] text-4xl font-semibold -mb-1 md:ml-32 ml-0 md:text-left text-center">
  RANKING
  </h2>
<div className="bg-[#37447E] pb-16 px-8 md:px-32">



{/* buttons */}
<div className=" py-8 gap-x-4 sm:gap-x-8 md:gap-x-16 lg:gap-x-32 flex flex-row text-white justify-center">
  <button onClick={() => setRanking(rankingTuition)} className="hover:underline active:opacity-80 font-semibold">Tuition Fee</button>
  <button onClick={() => setRanking(rankingInternational)} className="hover:underline active:opacity-80 font-semibold">International Students</button>
  <button onClick={() => setRanking(rankingAcceptance)} className="hover:underline active:opacity-80 font-semibold">Acceptance Rate</button>
  <button onClick={() => setRanking(rankingResearch)} className="hover:underline active:opacity-80 font-semibold">Research </button>
</div>


<p className="text-white text-center text-3xl">{ranking.name}</p>

<div className=" flex flex-col text-white justify-center mt-8">
<div className="flex flex-row justify-center gap-x-12">
  <h3 className="text-3xl font-semibold mt-3">1</h3>
  <div className="bg-white  flex items-center h-full justify-center rounded-lg py-3 w-96 md:w-[48rem] ">
  <p className="text-[#37447E] text-center whitespace-nowrap text-2xl font-semibold  ">{ranking.rank[0]}</p>
  </div>
</div>
</div>



<div className=" flex flex-col text-white justify-center mt-8">
<div className="flex flex-row justify-center gap-x-12">
  <h3 className="text-3xl font-semibold mt-3">2</h3>
  <div className="bg-white  flex items-center h-full justify-center rounded-lg py-3 w-96 md:w-[48rem] ">
  <p className="text-[#37447E] text-center whitespace-nowrap text-2xl font-semibold  ">{ranking.rank[1]}</p>
  </div>
</div>
</div>




<div className=" flex flex-col text-white justify-center mt-8">
<div className="flex flex-row justify-center gap-x-12">
  <h3 className="text-3xl font-semibold mt-3">3</h3>
  <div className="bg-white  flex items-center h-full justify-center rounded-lg py-3 w-96 md:w-[48rem] ">
  <p className="text-[#37447E] text-center whitespace-nowrap text-2xl font-semibold  ">{ranking.rank[2]}</p>
  </div>
</div>
</div>



<div className=" flex flex-col text-white justify-center mt-8">
<div className="flex flex-row justify-center gap-x-12">
  <h3 className="text-3xl font-semibold mt-3">4</h3>
  <div className="bg-white  flex items-center h-full justify-center rounded-lg py-3 w-96 md:w-[48rem] ">
  <p className="text-[#37447E] text-center whitespace-nowrap text-2xl font-semibold  ">{ranking.rank[3]}</p>
  </div>
</div>
</div>







</div>

</section>






    </section>






  );
}

export default Home;
