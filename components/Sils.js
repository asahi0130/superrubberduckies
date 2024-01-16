import React, { ChangeEvent, useEffect, useState } from 'react'


import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast'
import university from '../public/university.json'
import 'animate.css';



function Sils(){ 



  return (
  
<React.Fragment>


<div className='text-[#800000] md:mt-16 mx-8 md:mx-48'>
<h1 className='text-3xl font-semibold whitespace-nowrap'>Waseda University</h1>
<h2 className='text-xl font-semibold whitespace-nowrap'>School of International Liberal Arts</h2>

<img className="rounded-2xl" src="/images/sils.jpg"></img>

</div>


  </React.Fragment>

  )
}



export default Sils