import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="preload" as="image" href="https://holopin.me/timoransky" />
      </Head>
      <body className="bg-zinc-50 dark:bg-[#121212]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
