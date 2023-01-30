import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import motorcycle from "../public/assets/img/motorcycle.png";

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
      <div className="bg-cover bg-[url('../public/assets/img/motorcycle.png')]"></div>
      <h1 className="text-gray-800 font-normal text-3xl sm:text-5xl md:text-6xl my-2 sm:my-5 text-center">
        {" "}
        Hello
      </h1>
      <p className="text-gray-800 font-normal text-base sm:text-lg md:text-xl m-auto max-w-2xl text-center"></p>
    </div>
  );
}
