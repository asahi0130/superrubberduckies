import NextNProgress from 'nextjs-progressbar';
import '../styles/globals.css';
import Head from 'next/head';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { DefaultSeo, NextSeo } from 'next-seo';
import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {




  return (


    <>

<Head>
{/* <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="512x512" href="/icon.png" />
<link rel="icon" type="image/x-icon" href="/favicon.ico"/> */}
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<NextSeo title={"English College Picker"} description={"This website helps students decide which college suits them the best."}/>

</Head>

<link href="https://fonts.googleapis.com/css2?family=Lato&family=Merriweather+Sans&family=Roboto&family=Sigmar+One&display=swap" rel="stylesheet"></link>
    

      <NextNProgress />
      <Header />
      <Component {...pageProps} />
      <Footer />

      </>
  );
}

export default MyApp;
