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




    <section className=" overflow-x-hidden overflow-y-hidden">




<NextSeo title={title}description={description}/>
<Toaster position="bottom-right" />


{/* top */}

<section id="top">

<h1 className="text-3xl text-center my-8">Title</h1>

</section>



{/* uni */}

<section className="" id="uni">

<div className="container px-8 mb-24 mx-auto bg-gray-200 rounded-lg py-6 ">

<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">


{university.map((b, index) => (
<React.Fragment key={index}>
<UniversityCard b={b} index={index}/>
</React.Fragment>))}

</div>
</div>

</section>

    


    </section>


  );
}

export default Home;
