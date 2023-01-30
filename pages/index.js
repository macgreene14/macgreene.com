import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mac Greene</title>
        <meta
          name="description"
          content="Mac Greene's Personal Web Development Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-gray-800 font-normal text-3xl sm:text-5xl md:text-6xl my-2 sm:my-5 text-center">
        About Mac
      </h1>
      <p className="text-gray-800 font-normal text-base sm:text-lg md:text-xl m-auto max-w-2xl text-center">
        Mac Greene is an aspiring web developer based out of Nashville, TN. He
        received a B.S. in Engineering from Fort Lewis College in Durango,
        Colorado. Since graduating, Mac has worked as a project engineering for
        Nextracker; a leading provider of utility racking systems.{" "}
      </p>
    </div>
  );
}
