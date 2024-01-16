import React, { ChangeEvent, useEffect, useState } from 'react'


import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast'
import university from '../public/university.json'
import 'animate.css';



function Sils(){ 



  return (
  
<React.Fragment>


<div className='text-[#800000] md:mt-16 mx-8 md:mx-48'>
<h1 className='text-3xl font-semibold whitespace-nowrap mb-4'>Waseda University</h1>
<h2 className='text-xl font-semibold whitespace-nowrap mb-16'>School of International Liberal Arts</h2>

<img width={600} height={400} className="rounded-2xl" src="/images/sils.jpg"></img>
</div>





<section className="">
<h2 className="text-right mt-24 -mb-1 font-semibold text-4xl text-[#800000] mx-8 md:mx-32">ABOUT</h2>
<div className="bg-[#800000] py-8 px-4">

<div>
<p className="text-white text-center text-lg md:w-1/2 md:mx-auto">“SILS aims students to develop problem-solving skill for globalising world, conscious of their cultural identity but also develop multicultural society, concrete foundation of broad academic fields with strong interests in innovative, interdisciplinary scholarly pursuits, express their own views in foreign language”</p>
</div>


<div className='flex flex-col md:flex-row justify-center md:gap-x-8 lg:gap-x-24 '>

<div>
  <img width={200} height={200} src='/images/placeholder.jpeg'></img>
</div>

<div>
  <img width={200} height={200} src='/images/placeholder.jpeg'></img>
</div>

<div>
  <img width={200} height={200} src='/images/placeholder.jpeg'></img>
</div>

<div>
  <img width={200} height={200} src='/images/placeholder.jpeg'></img>
</div>


</div>



</div>
</section>



  </React.Fragment>

  )
}



export default Sils