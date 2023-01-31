import Head from "next/head";
import Link from "next/link";

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

      <div className="bg-container"></div>

      <section className="fixed text-right top-20 right-0 sm:right-5 m-3 p-3">
        <h1>
          My name is <span className="font-bold">Mac</span>
        </h1>
        <h1>I like to build cool things</h1>

        <Link href="/portfolio">
          <h1 className="underline">Explore Portfolio</h1>
        </Link>
      </section>
    </div>
  );
}
