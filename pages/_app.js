import "../styles/globals.css";
import Navbar from "../components/navbar";
import Head from "next/head";
import Footer from "../components/footer";
import { Analytics } from "@vercel/analytics/react";
import GA from "../utils/GA";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Mac Greene</title>
        <meta name="description" content="Mac Greene" />
        <link rel="icon" href="/compy.png" />
      </Head>
      <div>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <Analytics />
        <GA />
      </div>
    </div>
  );
}
export default MyApp;
