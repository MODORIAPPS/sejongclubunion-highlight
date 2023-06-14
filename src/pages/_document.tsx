import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="ko" className='h-full'>
      <Head >
        <meta property="og:image" content="https://find.sejongclubunion.com/images/head_og.png" />
        <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js" integrity="sha384-dpu02ieKC6NUeKFoGMOKz6102CLEWi9+5RQjWSV0ikYSFFd8M3Wp2reIcquJOemx" crossOrigin="anonymous"></script>
        <Script strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5CD82MB');`}}></Script>
      </Head>
      <body className='h-full'>
        <Main />
        <div id='modal-root' />
        <NextScript />
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5CD82MB"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
      </body>
    </Html>
  )
}
