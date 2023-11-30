import React, { ChangeEvent, useEffect, useState } from 'react'


import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast'



function UniversityCard({b, index}){ 




  return (
  
<React.Fragment>

<Link key={index.toString()} href={`/university/${b.slug}`} >

{/*  */}
  <div className={`relative ${b.slug}  shadow-xl rounded-lg p-4 h-[200px] w-7/8 m-auto hover:opacity-80  transition-all`}> 

    {/* <div className="border-gray-400 border-2 block relative h-48 rounded overflow-hidden">
      <img
      layout="fill" alt={b.title} className="object-cover object-center w-full h-full block" src={b.image}  />
    </div> */}

    <div className="mt-4">
    <p className=" flex justify-center  title-font text-2xl font-medium text-white">{b.title}</p>


    </div>

  </div>
  </Link>





  </React.Fragment>

  )
}



export default UniversityCard