import React, { ChangeEvent, useEffect, useState } from 'react'


import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast'
import university from '../public/university.json'



function QuizResult({b}){ 

const [school, setSchool] = useState()
const [program, setProgram] = useState()


function getFull(slug) {
  for (let i = 0; i < university.length; i++) {
      if (university[i].slug === slug) {
          return university[i].fullname;
      }
  }
  return "Fullname not found for the given slug";
}


useEffect(() => {
  setProgram(getFull(b))

  if (b == "giga" || b == "pearl"){
    setSchool("Keio University")
  } 

  if (b == "sils" || b == "pse"){
    setSchool("Waseda University")
  }

},[b])


  return (
  
<React.Fragment>


<div className={`relative z-[-2] pt-8 pb-16 mx-8 px-6 rounded-lg shadow-xl  text-white text-2xl ${school == "waseda" ? ('bg-[#8B3232]') : ('bg-[#f1c500d3]')}`}>

<div className=''>

  <p className='mb-4'>{school}</p>
  <li className='mb-16'>
  {program}
  </li>

  <Link href={`/university/${b}`}>
    <p className='hover:underline'>
  {'>'}{'>'}Find more about this course
  </p>
  </Link>
</div>


<div className=' '>
<img className={"absolute right-0 top-0 z-[-1]"} height={216} width={216} src={`${school == "waseda" ? ("/images/waseda-crop.png") : ("/images/keio-crop.png")}`} />
</div>



</div>


  </React.Fragment>

  )
}



export default QuizResult