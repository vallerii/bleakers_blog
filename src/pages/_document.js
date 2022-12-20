import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Jost:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/logo.svg" />
      </Head>
      <body>
        {/* <Script
          type="text/javascript"
          src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
        ></Script> */}
        <Script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
