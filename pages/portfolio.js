import screenshot1 from "../public/assets/img/skimail.png";
import screenshot2 from "../public/assets/img/hot.png";
import screenshot3 from "../public/assets/img/retool.png";

import Card from "../components/card";

export default function Portfolio() {
  console.log(screenshot1);
  return (
    <div className="flex flex-col items-center justify-start bg-white px-6 py-8 lg:px-8 rounded-lg">
      <div className="mx-auto max-w-2xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 text-center">
          Web Dev Portfolio
        </h1>
        <h2 className="text-xl md:text-2xl font-normal tracking-tight text-gray-600 text-center">
          Here are some highlights from my 2023 web development portfolio.
          Please reach out if you&apos;d like to learn more about a project.
        </h2>
      </div>
      <section className="flex flex-wrap justify-center">
        <Card
          src={screenshot1.src}
          title="SKIMAIL"
          desc="A travel research platform for finding the best flight fare to every Ikon ski resort."
          tag1="React"
          tag2="TailwindCSS"
          href="https://www.skimail.co"
        />

        <Card
          src={screenshot2.src}
          title="Home & Office Transtions"
          desc="Developed a website and inventory tracking system for a warehouse receiving facility."
          tag1="Wix"
          tag2="Airtable"
          href="https://homeandofficetransitions.com/"
        />

        <Card
          src={screenshot3.src}
          title="Solar Engineering Tooling"
          desc="Developed an application for running solar performance analyses and creating reports."
          tag1="Retool"
          tag2="Azure Functions"
          href=""
        />
      </section>
    </div>
  );
}
