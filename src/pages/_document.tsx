import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <meta property="og:image" content="https://find.sejongclubunion.com/images/head_og.png" />
        <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js" integrity="sha384-dpu02ieKC6NUeKFoGMOKz6102CLEWi9+5RQjWSV0ikYSFFd8M3Wp2reIcquJOemx" crossOrigin="anonymous"></script>
      </Head>
      <body>
        <Main />
        <div id='modal-root' />
        <NextScript />
      </body>
    </Html>
  )
}
