import React, { ChangeEvent, useEffect, useState } from 'react'




function contact(){ 


return(

    <>

<div className="text-center h-auto pt-8 md:pt-16 textColor pb-12">
<h1 className='text-2xl mb-8'>
  Contact
</h1>

<section id="about" className="">

        <section className="textColor body-font relative">
  <div className="container px-5  mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base ">contact us...</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-800">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-800">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-800">Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-gray-700 border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 active:opacity-70 rounded text-lg" 
          onClick={() => {return(null)}}>Send</button>
        </div>

      </div>
    </div>
  </div>
</section>


 
      </section>





</div>
</>
)

}

export default contact;