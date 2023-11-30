import React from 'react'


const Footer = () => {
  return (
    <section className=''>
    
<footer className="bg-[#e7ecff] rounded-lg shadow-inner ">
    <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0 ">
                {/* <img src="/images/LogoHeader.png" className="h-12 mr-3" alt="Logo" /> */}
                <span className="self-center text-md font-semibold whitespace-nowrap ">English College Picker</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-700 sm:mb-0 ">
                <li>
                    <a target="_self" rel="noreferrer" href="/policy" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a target="_self" rel="noreferrer" href="/terms" className="mr-4 hover:underline md:mr-6 ">Terms</a>
                </li>
                <li>
                    <a target="_self" rel="noreferrer" href="/sitemap" className="hover:underline md:mr-6">Sitemap</a>
                </li>
                
                <li>
                <a target="_self" rel="noreferrer" href="/contact" className="mr-4 hover:underline  ">Contact</a>

                </li>

            </ul>
        </div>
        <hr className="my-6 border-gray-800 sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-gray-700 sm:text-center ">© 2023 <a href="#" className="hover:underline">SUPERRUBBERDUCKIES</a>. All Rights Reserved.</span>
    </div>
</footer>


    
    </section>
  )
}

export default Footer