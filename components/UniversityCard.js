import React, { ChangeEvent, useEffect, useState } from 'react'


import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast'



function UniversityCard({b, index}){ 




  return (
  
<React.Fragment>

<Link key={index.toString()} href={`/university/${b.slug}`} >

{/*  */}
  <div className=" relative bg-white  rounded-lg p-4 w-full hover:bg-gray-100  transition-all "> 

    <div className="border-gray-400 border-2 block relative h-48 rounded overflow-hidden">
      <img placeholder="blur" blurDataURL='iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYJD8DwABOwEaUCEarwAAAABJRU5ErkJggg=='
      layout="fill" alt={b.title} className="object-cover object-center w-full h-full block" src={b.image}  />
    </div>
    <div className="mt-4">
    <p className="text-gray-900 title-font text-2xl font-medium">{b.title}</p>

      <p className=" text-gray-800 mt-1 mb-24">{b.text}</p>



    </div>

  </div>
  </Link>





  </React.Fragment>

  )
}



export default UniversityCard