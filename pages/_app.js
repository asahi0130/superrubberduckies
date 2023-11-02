import NextNProgress from 'nextjs-progressbar';
import '../styles/globals.css';
import Head from 'next/head';
// import Header from "../components/Header";
// import Footer from "../components/Footer";
import { DefaultSeo } from 'next-seo';
import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {




  return (


    <>
      <NextNProgress />
      {/* <Header /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}

      </>
  );
}

export default MyApp;
