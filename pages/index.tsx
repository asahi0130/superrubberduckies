import React, { useRef, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import university from "../public/university.json";
import UniversityCard from "../components/UniversityCard";
import "animate.css";
import Image from "next/image";

//END OF IMPORTS

function Home() {
  const title = "Title";
  const description = "Descriotion";

  const rankingTuition = {
    rank: ["Waseda University PSE", "Keio University PEARL", "Keio University GIGA", "Waseda University SILS"],
    name: "Tuition",
  };

  const rankingInternational = {
    rank: ["Keio University GIGA", "Waseda University SILS", "Keio University PEARL", "Waseda University PSE"],
    name: "International Students",
  };

  const rankingAcceptance = {
    rank: ["Waseda University PSE", "Waseda University SILS", "Keio University PEARL", "Keio University GIGA"],
    name: "Acceptance Rate",
  };

  const rankingResearch = {
    rank: ["Keio University GIGA", "Keio University PEARL", "Waseda University SILS", "Waseda University PSE"],
    name: "Research",
  };

  const [ranking, setRanking] = useState<any>(rankingTuition);

  const slides = 6;
  const [current, setCurrent] = useState(1)
  
  function right(){
  var next = current+1
  if (next > slides){
    setCurrent(1)
  } else{
  setCurrent(next)
  }
  }
  
  function left(){
    var prev = current-1
    if (prev < 1){
      setCurrent(slides)
    } else{
    setCurrent(prev)
    }
    }
  
    function changeSlide(num:any){
    
      if (num < 1 || num > slides){
        return
      } else {
        setCurrent(num)
      }
    
    }
  
    function clickImg(num:any){
  if (num < 1 || num > slides){
    return
  } else
   if (num == 1) {
// zoom in
   } else
   if (num == 2){
// zoom in
   } else
   if (num == 3){
    //ZOOM IN 
   } else
   if (num == 4){
  //ZOOM IN
   } else
   if (num == 5){
  //ZOOM IN
   }else
   if (num == 6){
  //ZOOM IN
   }
  
    }


    const ref = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__slideInUp');
          } 
        },
        {
          root: null,
          threshold: 0,
        }
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      if (ref2.current) {
        observer.observe(ref2.current);
      }

      if (ref3.current) {
        observer.observe(ref3.current);
      }
  
      if (ref4.current) {
        observer.observe(ref4.current);
      }
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }

        if (ref2.current) {
          observer.unobserve(ref2.current);
        }

        if (ref3.current) {
          observer.unobserve(ref3.current);
        }

        if (ref4.current) {
          observer.unobserve(ref4.current);
        }
      };
    }, []);


  // START HERE
  return (<>
  <Head>
<meta name="google-site-verification" content="5enT4CrE6jlibl9f92Y-zMXsie_L05-a9KKOi8rFNJg" />

  </Head>
    <section className="  overflow-x-hidden overflow-y-hidden">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato&family=Merriweather+Sans&family=Roboto:wght@400;500;700&family=Sigmar+One&display=swap&family=Merriweather:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      {/* <NextSeo title={title}description={description}/> */}
      <Toaster position="bottom-right" />

      {/* top */}

      <section className="mb-12" id="top">
        {/* <h1 className="md:text-8xl text-5xl text-center  mx-auto sigfont textColor font-bold lg:mb-72 md:mt-24 md:mb-32 mb-32 lg:w-7/12">English College Picker</h1> */}
        {/* ml-8 md:ml-32 */}


        <div className="mx-8 md:ml-8 md:mr-12 lg:mr-32 lg:ml-32 flex flex-col md:flex-row justify-center md:gap-x-16 md:mt-36 animate__animated animate__bounceInUp">


          <div className="textColor robotoFont text-4xl whitespace-nowrap md:text-4xl lg:text-6xl xl:text-8xl font-semibold   ">
           
           <div className="flex flex-row ">
            
            <p className="mb-8">Find your&nbsp;</p>
            <p className="text-[#FDD000]">college</p>

            </div>
            <div className="flex flex-row">
           
            <p>in</p>
            <p className="scale-125 text-[#800000]">&nbsp;&nbsp;Japan</p>
            <p className="scale-125">&nbsp;&nbsp;.</p>


            </div>
            <br></br>
     
          </div>

          <div className="flex items-center">
            <Image className="rounded-2xl shadow-slate-600 shadow-2xl" alt={"english college picker"} width={700} height={600} src="/images/splash.jpeg"></Image>
            
          </div>
        </div>

        <div className="flex flex-row relative">
          <img
          alt={"english college picker"}
            className="absolute -left-24 md:bottom-16 lg:bottom-32  bottom-[10rem] -z-40"
            height={200}
            width={200}
            src="/images/keio.png"
          />
          <img
          alt={"english college picker"}
            className="absolute -right-24 md:bottom-16 lg:bottom-32 bottom-[10rem] -z-40"
            height={200}
            width={200}
            src="/images/waseda.png"
          />
        </div>




<div className="flex flex-col  justify-center text-left  bg-[#1E2E76] pt-64 pb-64 mt-64 mb-16 relative">
<div className="custom-shape-divider-top-1706084174">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z" className="shape-fill"></path>
    </svg>
</div>
<div className="custom-shape-divider-bottom-1706084301">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" className="shape-fill"></path>
    </svg>
</div>
  
        <div ref={ref} className="text-left lg:ml-[30%] lg:w-8/12 md:w-8/12 w-3/4 mx-auto text-white  text-3xl md:text-4xl font-semibold ">
            <p>Love Japan</p>
            <p>Want to study in Japan</p>
            <br></br>
            <p>...but cannot find English programs?</p>
            <br></br>
            <p className="text-[#FDD000]">LET US CHOOSE YOUR COURSES</p>
            <br></br>
            <p className=" text-base md:text-xl w-3/4">
            From course content to admission pamphlet... Gain honest and accurate overview of Keio and Waseda universities to choose your course! 
            </p>
          </div>
          </div>


        {/* ARROW */}
        {/* <div className="flex justify-center my-16">
          <img
          alt={"english college picker"}
            className="justify-center"
            width={128}
            height={128}
            src="/images/arrow.png"
          ></img>
        </div> */}
        {/* why */}
        <section ref={ref2} className="mx-8 lg:mx-48 md:mx-16 ">
          <h2 className="text-right mt-24 textColor font-semibold text-5xl ">
            Why KEIO and WASEDA?
          </h2>
          <div className="border-4 border-[#37447E] rounded-lg flex flex-col md:flex-row p-4 items-center px-8 md:px-24">
            <div>
              <img
              alt={"english college picker"}
                width={1200}
                height={1000}
                src="/images/splash2.jpeg"
              ></img>
            </div>

            <div>
              <p className="textColor text-center text-lg">
                KEIO and WASEDA Universities are
                &nbsp;<strong>two top prestigious private universities in Japan</strong> 
                . Not only it offers 
                &nbsp; <strong>fully-English programs</strong>&nbsp;

                with opportunities to master N1 of Japanese Linguistic
                Proficiency Test, but also 
                
                &nbsp;<strong>ranked top 10 academically</strong>&nbsp;
                
                in Japan. Both has strength in industry, with an 
                &nbsp;  <strong>impressive alumni networks</strong>&nbsp;
                
                 both nationally and internationally.
              </p>
            </div>
          </div>



            <div className="mt-32 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-4 gap-x-8">
              {university.map((b, index) => (
                <React.Fragment key={index}>
                  <UniversityCard b={b} index={index} />
                </React.Fragment>
              ))}

          </div>



        </section>

        {/* <section className="my-16 " id="uni">
  

          <div className="container px-24  mx-auto  rounded-lg py-6 ">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-4 gap-x-8">
              {university.map((b, index) => (
                <React.Fragment key={index}>
                  <UniversityCard b={b} index={index} />
                </React.Fragment>
              ))}
            </div>
          </div>


        </section> */}
      </section>

      {/* uni */}

      {/* 
<hr className="h-px my-16 bg-gray-300 mx-16 border-0" />
<img src="/images/keio.png" />
<img src="/images/waseda.png" /> */}

      {/* ranking */}
      <section ref={ref3} className="mt-48">
        <h2 className="text-[#37447E] text-6xl font-semibold -mb-1 md:ml-32 ml-0 md:text-left text-center">
          RANKING
        </h2>
        <div className="bg-[#1E2E76] pb-16 px-8 md:px-32">
          {/* buttons */}
          <div className=" py-8 gap-x-4 sm:gap-x-8 md:gap-x-16 lg:gap-x-32 flex flex-row text-white justify-center">
            <button
              onClick={() => setRanking(rankingTuition)}
              className="hover:underline active:opacity-80 font-semibold"
            >
              Tuition Fee
            </button>
            <button
              onClick={() => setRanking(rankingInternational)}
              className="hover:underline active:opacity-80 font-semibold"
            >
              International Students
            </button>
            <button
              onClick={() => setRanking(rankingAcceptance)}
              className="hover:underline active:opacity-80 font-semibold"
            >
              Acceptance Rate
            </button>
            <button
              onClick={() => setRanking(rankingResearch)}
              className="hover:underline active:opacity-80 font-semibold"
            >
              Research{" "}
            </button>
          </div>

          <p className="text-white text-center text-3xl">{ranking.name}</p>

          <div className=" flex flex-col text-white justify-center mt-8">
            <div className="flex flex-row justify-center gap-x-12">
              <h3 className="text-5xl font-semibold mt-3">1</h3>
              <div className="bg-white  flex items-center h-full justify-center rounded-lg py-3 w-96 md:w-[48rem] ">
                <p className="text-[#37447E] text-center whitespace-nowrap robotoFont text-2xl font-semibold  ">
                  {ranking.rank[0]}
                </p>
              </div>
            </div>
          </div>

          <div className=" flex flex-col text-white justify-center mt-8">
            <div className="flex flex-row justify-center gap-x-12">
              <h3 className="text-5xl font-semibold mt-3">2</h3>
              <div className="bg-white  flex items-center h-full justify-center rounded-lg py-3 w-96 md:w-[48rem] ">
                <p className="text-[#37447E] text-center whitespace-nowrap robotoFont text-2xl font-semibold  ">
                  {ranking.rank[1]}
                </p>
              </div>
            </div>
          </div>

          <div className=" flex flex-col text-white justify-center mt-8">
            <div className="flex flex-row justify-center gap-x-12">
              <h3 className="text-5xl font-semibold mt-3">3</h3>
              <div className="bg-white  flex items-center h-full justify-center rounded-lg py-3 w-96 md:w-[48rem] ">
                <p className="text-[#37447E] text-center whitespace-nowrap robotoFont text-2xl font-semibold  ">
                  {ranking.rank[2]}
                </p>
              </div>
            </div>
          </div>

          <div className=" flex flex-col text-white justify-center mt-8">
            <div className="flex flex-row justify-center gap-x-12">
              <h3 className="text-5xl font-semibold mt-3">4</h3>
              <div className="bg-white  flex items-center h-full justify-center rounded-lg py-3 w-96 md:w-[48rem] ">
                <p className="text-[#37447E] text-center whitespace-nowrap robotoFont text-2xl font-semibold  ">
                  {ranking.rank[3]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>









<section ref={ref4} className="mx-auto z-20 slideshow md:w-5/12 mb-32">
<h2 className="text-5xl text-center text-[#37447E] font-bold mt-32">DEADLINES</h2>


<img  
          className="mb-12"
          src="images/key.png"
          alt="key"
        />

    <div onClick={() => clickImg(1)} className={` transition-all block slide px-12 fade ${current == 1 ? ('is-active') : ('')}`}>
    <span className="rainbow"></span>
      <span className="slide-number">1 / 6</span>
      <figure className="slide-image">
        <img
          src="/images/1.jpg"
          alt="calendar"
        />

      </figure>
    </div>


    <div onClick={() => clickImg(2)} className={` transition-all block slide px-12 fade ${current == 2 ? ('is-active') : ('')}`}>
    <span className="rainbow"></span>
      <span className="slide-number">2 / 6</span>
      
      <figure className="slide-image">
        <img
          src="/images/2.jpg"
          alt="calendar"
        />

      </figure>
    </div>

    <div onClick={() => clickImg(3)} className={` transition-all block slide px-12 fade ${current == 3 ? ('is-active') : ('')}`}>
    <span className="rainbow"></span>
      <span className="slide-number"><p>3 / 6</p></span>
      <figure className="slide-image">
        <img
          src="/images/3.jpg"
          alt="calendar"
        />

      </figure>
    </div>

    <div onClick={() => clickImg(4)} className={` transition-all block slide px-12 fade ${current == 4 ? ('is-active') : ('')}`}>
    <span className="rainbow"></span>  
        <span className="slide-number">4 / 6</span>
      <figure className="slide-image">
        <img
          src="/images/4.jpg"
          alt="calendar"
        />

      </figure>
    </div>

    <div onClick={() => clickImg(5)} className={` transition-all block slide px-12 fade ${current == 5 ? ('is-active') : ('')}`}>
    <span className="rainbow"></span>
      <span className="slide-number">5 / 6</span>
      <figure className="slide-image">
        <img
          src="/images/5.jpg"
          alt="calendar"
        />

      </figure>
    </div>
    
    <div onClick={() => clickImg(6)} className={` transition-all block slide px-12 fade ${current == 6 ? ('is-active') : ('')}`}>
    <span className="rainbow"></span>
      <span className="slide-number">6 / 6</span>
      <figure className="slide-image">
        <img
          src="/images/6.jpg"
          alt="calendar"
        />

      </figure>
    </div>






    <div className="controlsL">
      <button className="prev" onClick={() => left()}>&#10094;</button>
    </div>

    <div className="controlsR">
      <button className="next" onClick={() => right()}>&#10095;</button>
    </div>

    <div className="dots-container">
      <span  className={`dot ${current == 1 ? ('is-active') : ('')}`} onClick={() => changeSlide(1)}></span>
      <span  className={`dot ${current == 2 ? ('is-active') : ('')}`} onClick={() => changeSlide(2)}></span>
      <span  className={`dot ${current == 3 ? ('is-active') : ('')}`} onClick={() => changeSlide(3)}></span>
      <span  className={`dot ${current == 4 ? ('is-active') : ('')}`} onClick={() => changeSlide(4)}></span>
      <span  className={`dot ${current == 5 ? ('is-active') : ('')}`} onClick={() => changeSlide(5)}></span>
      <span  className={`dot ${current == 6 ? ('is-active') : ('')}`} onClick={() => changeSlide(6)}></span>



    </div>
  </section>




    </section>
    </>
  );
}

export default Home;
