import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    window.location.replace("https://janci.dev");
  }, []);

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      minHeight: "100vh",
      fontFamily: "system-ui, -apple-system, sans-serif"
    }}>
      <Head>
        <title>Redirecting...</title>
        <meta httpEquiv="refresh" content="0;url=https://janci.dev" />
        <link rel="canonical" href="https://janci.dev" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div style={{ textAlign: "center" }}>
        <p>Redirecting to <a href="https://janci.dev">janci.dev</a>...</p>
      </div>
    </div>
  );
};

export default Home;
