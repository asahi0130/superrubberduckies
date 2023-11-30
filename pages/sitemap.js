import React, { ChangeEvent, useEffect, useState } from 'react'




function sitemap(){ 


return(

    <>

<div className="text-center h-screen pt-8 md:pt-16 bg-gray-100 pb-12">
<h1 className='text-2xl mb-8'>
  Sitemap
</h1>


<h2 className='text-xl w-3/4 md:w-1/2 mx-auto text-left'>Home:</h2>

<p onClick={() => window.open("/")} className='w-3/4 md:w-1/2 mx-auto text-left cursor-pointer text-blue-600 underline hover:text-blue-700 active:opacity-80'>
Index
</p>
<br></br>
<h2 className='text-xl w-3/4 md:w-1/2 mx-auto text-left'>University:</h2>
<p onClick={() => window.open("/university/giga")} className='w-3/4 md:w-1/2 mx-auto text-left cursor-pointer text-blue-600 underline hover:text-blue-700 active:opacity-80'>
  Keio GIGA </p>

  <p onClick={() => window.open("/university/pearl")} className='w-3/4 md:w-1/2 mx-auto text-left cursor-pointer text-blue-600 underline hover:text-blue-700 active:opacity-80'>
    Keio PEARL</p>

  <p onClick={() => window.open("/university/sils")} className='w-3/4 md:w-1/2 mx-auto text-left cursor-pointer text-blue-600 underline hover:text-blue-700 active:opacity-80'>
  Waseda SILS</p>

  <p onClick={() => window.open("/university/pse")} className='w-3/4 md:w-1/2 mx-auto text-left cursor-pointer text-blue-600 underline hover:text-blue-700 active:opacity-80'>
  Waseda PSE </p>


<br></br>

{/* <h2 className='text-xl w-3/4 md:w-1/2 mx-auto text-left'>About:</h2>
<p onClick={() => window.open("/policy")} className='w-3/4 md:w-1/2 mx-auto text-left cursor-pointer text-blue-600 underline hover:text-blue-700 active:opacity-80'>
Privacy Policy </p>
<p onClick={() => window.open("/terms")} className='w-3/4 md:w-1/2 mx-auto text-left cursor-pointer text-blue-600 underline hover:text-blue-700 active:opacity-80'>
  Terms and Conditions </p>
  <p onClick={() => window.open("/sitemap")} className='w-3/4 md:w-1/2 mx-auto text-left cursor-pointer text-blue-600 underline hover:text-blue-700 active:opacity-80'>
  Sitemap </p>
  <br></br><br></br>
  <hr></hr>
  <br></br><br></br>

<a target="_blank" rel="noreferrer" href="/sitemap.xml" className='cursor-pointer text-blue-600 underline hover:text-blue-700 active:opacity-80'>Sitemap</a> */}


</div>
</>
)

}

export default sitemap;