
https://console.cloud.google.com/apis/credentials



IPHONE:

//REQUIRED PACKAGES

npm install --global pwa-asset-generator



//CREATE FILES

/public/site.webmanifest
{
  "display": "standalone",
  "short_name": "APP_NAME"
}



//STYLES (global.css)
@media screen and (display-mode: standalone){
.mainheadermargin{
  margin-top: 2rem !important;
}



//_APP.TSX INSIDE <Head></Head>
```
<link rel="manifest" href="/site.webmanifest" />
<meta name="apple-mobile-web-app-status-bar-style" 
content="black-translucent" />
<meta name="viewport" content="initial-scale=1, viewport-fit=cover, user-scalable=no" />
```



//LOADING SCREEN & LOGO

1. Make /public/temp.html
2. Set /public/images/logo.png
3. Run command below
4. Format tags (add slash at the end and at the href)
5. web.manifest (add slash at href)

npx pwa-asset-generator public/images/logo.png public -m public/manifest.json --padding "calc(50vh - 25%) calc(50vw - 25%)" -b "linear-gradient(135deg, #1d1d1d, #505050)" -q 100 -i public/temp.html --favicon




# OFFLINE SUPPORT

1. npm i --save next-pwa
2. _document.js
3. next.config.js

