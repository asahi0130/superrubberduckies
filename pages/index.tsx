import React, { use, useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Script from "next/script";
import { useRouter } from "next/router";


//END OF IMPORTS

function Home() {


  const title = "[Practice] Group Proj"
  const description = "This website is a practice site."




  // START HERE
  return (




    <section className=" overflow-x-hidden overflow-y-hidden">




<NextSeo title={title}description={description}/>
<Toaster position="bottom-right" />


{/* top */}

<section id="top">

<h1 className="text-3xl text-center">Title</h1>

</section>

    


    </section>


  );
}

export default Home;
