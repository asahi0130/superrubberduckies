import NextNProgress from 'nextjs-progressbar';
import '../styles/globals.css';
import Head from 'next/head';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { DefaultSeo, NextSeo } from 'next-seo';
import { useEffect } from 'react';
import Script from 'next/script';


function MyApp({ Component, pageProps }) {




  return (


    <>

<Script strategy='lazyOnload' src="https://www.googletagmanager.com/gtag/js?id=G-BXBPSGRLM4"></Script>
{/* <Script strategy='lazyOnload' src="/tag.js"></Script> */}
<Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-BXBPSGRLM4', {
                      
                    page_path: window.location.pathname,
                    });
                `}
      </Script>

{/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-BXBPSGRLM4"></script>
<script src="/tag.js"></script> */}

<Head>
<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="512x512" href="/images/icon.png" />
<link rel="icon" type="image/x-icon" href="/images/favicon.ico"/>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />


</Head>
<NextSeo title={"English College Picker"} description={"This website helps students decide which college suits them the best."}/>

<link href="https://fonts.googleapis.com/css2?family=Lato&family=Merriweather+Sans&family=Roboto:wght@400;500;700&family=Sigmar+One&display=swap&family=Merriweather:wght@400;700&display=swap" rel="stylesheet"></link>
    

      <NextNProgress />
      <Header />
      <Component {...pageProps} />
      <Footer />

      </>
  );
}

export default MyApp;
