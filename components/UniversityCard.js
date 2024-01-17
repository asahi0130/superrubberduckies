import React, { ChangeEvent, useEffect, useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

function UniversityCard({ b, index }) {
  return (
    <React.Fragment>
      <Link key={index.toString()} href={`/university/${b.slug}`}>
        {/*  */}
        <div
          className={`relative ${b.slug}  shadow-xl rounded-lg p-4 h-[200px] w-7/8 m-auto hover:opacity-80  transition-all`}
        >
          <div className="h-full flex flex-col justify-center items-center  title-font text-2xl font-medium text-white">
            <p className="">{b.schoolshort}</p>
            <p className="">{b.program}</p>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
}

export default UniversityCard;
