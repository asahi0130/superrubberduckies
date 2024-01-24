import React, { use, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import university from "../public/university.json";
import UniversityCard from "../components/UniversityCard";
import QuizResult from "../components/QuizResult";
import "animate.css";

//END OF IMPORTS

function Quiz() {
  const [result, setResult] = useState<any>("");

  const [answer1, setAnswer1] = useState<any>(null);
  const [answer2, setAnswer2] = useState<any>(null);
  const [answer3, setAnswer3] = useState<any>(null);
  const [answer4, setAnswer4] = useState<any>(null);
  const [answer5, setAnswer5] = useState<any>(null);

  useEffect(() => {
    // Initialize score for each university
    let scoreGIGA = 0;
    let scorePEARL = 0;
    let scoreSILS = 0;
    let scorePSE = 0;

    // Assign points based on answers
    if (answer4) {
      scoreGIGA += 2; // Entrepreneurial interest strongly suggests GIGA
    }

    if (answer2) {
      scoreGIGA += 1;
      scorePEARL += 1;
      scoreSILS += 1;
      scorePSE += 1; // International focus benefits all programs
    }

    if (answer3) {
      scorePEARL += 2; // Specific major choice suggests PEARL
      scorePSE += 2; // Specific major choice suggests PSE
    }

    if (answer5) {
      scorePEARL += 1;
      scoreSILS += 2; // Interest in studying abroad suggests SILS
    }

    // City or outskirts preference (assuming city preference is more suited for these programs)
    if (answer1) {
      scoreSILS += 1;
      scorePSE += 1;
    }

    // Determine the most suitable university program
    let maxScore = Math.max(scoreGIGA, scorePEARL, scoreSILS, scorePSE);
    let result = "giga";

    if (maxScore === scoreGIGA) {
      result = "giga";
    } else if (maxScore === scorePEARL) {
      result = "pearl";
    } else if (maxScore === scoreSILS) {
      result = "sils";
    } else if (maxScore === scorePSE) {
      result = "pse";
    }

    // Set the final result
    setResult(result);
  }, [answer1, answer2, answer3, answer4, answer5]);

  function checkCompleted() {
    if (
      answer1 != null &&
      answer2 != null &&
      answer3 != null &&
      answer4 != null &&
      answer5 != null
    ) {
      return true;
    } else {
      return false;
    }
  }

  // START HERE
  return (
    <section className=" overflow-x-hidden overflow-y-hidden robotoFont">
      <Toaster position="bottom-right" />

      {/* top */}

      <section id="top">
        {/* <h1 className="text-xl text-center my-8 robotoFont textColor">English College Picker</h1> */}
        <h1 className="md:text-7xl text-3xl text-center pt-16 mt-8 robotoFont textColor font-semibold ">
         QUIZ
        </h1>
        <br></br>
        <h2 className="md:text-5xl text-3xl text-center pb-16 mb-8 robotoFont textColor font-semibold ">Find your best fit college!</h2>
      </section>

      {/* Quiz */}
      <section id="quiz" className="robotoFont">
        <section className="my-24" id="q1">
          <div className="relative bg-[#d9d9d9] rounded-lg mx-16 md:mx-36 lg:mx-72 textColor pt-16 pb-8">
            <h2 className="text-6xl absolute z-40 -top-4 ml-4 font-extrabold">
              1
            </h2>
            <span className="absolute top-2 text-4xl">____</span>
            <p className="mx-8 text-lg">
              Are you more of a city person or out-skirt person?
            </p>
            <div className="mt-4 flex justify-center gap-x-8">
              <button
                onClick={() => setAnswer1(true)}
                className={` ${
                  answer1 == true ? "bg-[#e7ecff]" : "bg-white"
                } textColor py-4 px-10 text-lg hover:opacity-80 active:opacity-70`}
              >
                City
              </button>
              <button
                onClick={() => setAnswer1(false)}
                className={` ${
                  answer1 == false ? "bg-[#e7ecff]" : "bg-white"
                } textColor py-4 px-10 text-lg hover:opacity-80 active:opacity-70`}
              >
                Out-skirt
              </button>
            </div>
          </div>
        </section>

        <section className="my-24" id="q2">
          <div className="relative bg-[#d9d9d9] rounded-lg mx-16 md:mx-36 lg:mx-72 textColor pt-16 pb-8">
            <h2 className="text-6xl absolute z-40 -top-4 ml-4 font-extrabold">
              2
            </h2>
            <span className="absolute top-2 text-4xl">____</span>
            <p className="mx-8 text-lg">
              How international do you want to be in university?
            </p>
            <div className="mt-4 flex justify-center gap-x-8">
              <button
                onClick={() => setAnswer2(true)}
                className={` ${
                  answer2 == true ? "bg-[#e7ecff]" : "bg-white"
                } textColor py-4 px-10 text-lg hover:opacity-80 active:opacity-70`}
              >
                Extensive
              </button>
              <button
                onClick={() => setAnswer2(false)}
                className={` ${
                  answer2 == false ? "bg-[#e7ecff]" : "bg-white"
                } textColor py-4 px-10 text-lg hover:opacity-80 active:opacity-70`}
              >
                Limited
              </button>
            </div>
          </div>
        </section>

        <section className="my-24" id="q3">
          <div className="relative bg-[#d9d9d9] rounded-lg mx-16 md:mx-36 lg:mx-72 textColor pt-16 pb-8">
            <h2 className="text-6xl absolute z-40 -top-4 ml-4 font-extrabold">
              3
            </h2>
            <span className="absolute top-2 text-4xl">____</span>
            <p className="mx-8 text-lg">
              Have you decided on specific major already?
            </p>
            <div className="mt-4 flex justify-center gap-x-8">
              <button
                onClick={() => setAnswer3(true)}
                className={` ${
                  answer3 == true ? "bg-[#e7ecff]" : "bg-white"
                } textColor py-4 px-10 text-lg hover:opacity-80 active:opacity-70`}
              >
                Yes
              </button>
              <button
                onClick={() => setAnswer3(false)}
                className={` ${
                  answer3 == false ? "bg-[#e7ecff]" : "bg-white"
                } textColor py-4 px-10 text-lg hover:opacity-80 active:opacity-70`}
              >
                No
              </button>
            </div>
          </div>
        </section>

        <section className="my-24" id="q4">
          <div className="relative bg-[#d9d9d9] rounded-lg mx-16 md:mx-36 lg:mx-72 textColor pt-16 pb-8">
            <h2 className="text-6xl absolute z-40 -top-4 ml-4 font-extrabold">
              4
            </h2>
            <span className="absolute top-2 text-4xl">____</span>
            <p className="mx-8 text-lg">
              Do you want to start your own business?
            </p>
            <div className="mt-4 flex justify-center gap-x-8">
              <button
                onClick={() => setAnswer4(true)}
                className={` ${
                  answer4 == true ? "bg-[#e7ecff]" : "bg-white"
                } textColor py-4 px-10 text-lg hover:opacity-80 active:opacity-70`}
              >
                Yes
              </button>
              <button
                onClick={() => setAnswer4(false)}
                className={` ${
                  answer4 == false ? "bg-[#e7ecff]" : "bg-white"
                } textColor py-4 px-10 text-lg hover:opacity-80 active:opacity-70`}
              >
                No
              </button>
            </div>
          </div>
        </section>

        <section className="my-24" id="q5">
          <div className="relative bg-[#d9d9d9] rounded-lg mx-16 md:mx-36 lg:mx-72 textColor pt-16 pb-8">
            <h2 className="text-6xl absolute z-40 -top-4 ml-4 font-extrabold">
              5
            </h2>
            <span className="absolute top-2 text-4xl">____</span>
            <p className="mx-8 text-lg">Do you want to study abroad?</p>
            <div className="mt-4 flex justify-center gap-x-8">
              <button
                onClick={() => setAnswer5(true)}
                className={` ${
                  answer5 == true ? "bg-[#e7ecff]" : "bg-white"
                } textColor py-4 px-10 text-lg hover:opacity-80 active:opacity-70`}
              >
                Yes
              </button>
              <button
                onClick={() => setAnswer5(false)}
                className={` ${
                  answer5 == false ? "bg-[#e7ecff]" : "bg-white"
                } textColor py-4 px-10 text-lg hover:opacity-80 active:opacity-70`}
              >
                No
              </button>
            </div>
          </div>
        </section>

        {/* RESULT */}

        <section className="my-24 z-" id="result">
          <div className="relative z-40 bg-[#d9d9d9] rounded-lg mx-16 md:mx-36 lg:mx-72 textColor pt-16 pb-8">
            <h2 className="text-7xl absolute z-40 -top-8 ml-4 font-extrabold left-1/2 transform -translate-x-1/2">
              Results
            </h2>
            <span className="absolute top-2 text-4xl left-1/2 transform -translate-x-1/2">
              _____
            </span>

            {checkCompleted() ? (
              <QuizResult b={result} />
            ) : (
              <p className="mx-8 text-lg">Please finish the quiz</p>
            )}
          </div>
        </section>
      </section>
    </section>
  );
}

export default Quiz;
