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


<div className='pt-8 pb-16 mx-8 px-6 rounded-lg shadow-xl bg-[#8B3232] text-white text-2xl'>

<div className='z-10  absolute right-0 top-16 '>
<img height={275} width={275} src="/images/waseda.png" />

</div>


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



  </React.Fragment>

  )
}



export default QuizResult