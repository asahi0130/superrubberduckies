import NextNProgress from 'nextjs-progressbar';
import '../styles/globals.css';
import Head from 'next/head';
import Header from "../components/Header";
// import Footer from "../components/Footer";
import { DefaultSeo } from 'next-seo';
import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {




  return (


    <>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Lato&family=Merriweather+Sans&family=Sigmar+One&display=swap" rel="stylesheet"></link>

      <NextNProgress />
      <Header />
      <Component {...pageProps} />
      {/* <Footer /> */}

      </>
  );
}

export default MyApp;
