import screenshot1 from "../public/assets/img/skimail.png";
import screenshot2 from "../public/assets/img/weather-dashboard.png";
import screenshot3 from "../public/assets/img/text-editor.png";
import screenshot4 from "../public/assets/img/quiz-game.png";

import screenshot5 from "../public/assets/img/mililani.png";
import screenshot6 from "../public/assets/img/townsite.png";
import screenshot7 from "../public/assets/img/athos.png";
import screenshot8 from "../public/assets/img/calhoun.png";

import screenshot9 from "../public/assets/img/hot.png";
import screenshot10 from "../public/assets/img/retool.png";

import Card from "../components/card";

export default function Portfolio() {
  console.log(screenshot1);
  return (
    <div className="flex flex-col px-6 py-8 lg:px-8 rounded-lg items-center justify-start bg-white">
      <div className="mx-auto max-w-xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
          Web Development
        </h1>
        <p className="mt-6 text-xl leading-8">
          Here are a few highlights from my 2023 web development portfolio. Feel
          free to reach out for more information.
        </p>
      </div>
      <section className="flex flex-row flex-wrap justify-center">
        <Card
          src={screenshot1.src}
          title="SKIMAIL"
          desc="A travel research platform for finding the best ski resorts around the world."
          tag1="Next.js"
          tag2="TailwindCSS"
          href="https://www.skimail.co"
        />
        <Card
          src={screenshot9.src}
          title="Home & Office Transtions"
          desc="Moving, storage, and warehouse recieving service out of Nashville, TN."
          tag1="Wix"
          tag2="Airtable"
          href="https://www.homeandofficetransitions.com"
        />
        <Card
          src={screenshot10.src}
          title="Solar Performance Tooling"
          desc="Web tool for solar performance analyses and custom reporting."
          tag1="Retool"
          tag2="Azure Functions"
          href=""
        />
      </section>
      {/* 
      <h1 className="text-center font-extrabold backdrop-blur-2xl rounded-2xl pt-20">
        Solar Projects ☀️
      </h1>
      <section className="flex flex-wrap justify-center p-4">
        <Card
          src={screenshot5.src}
          title="Mililani & Waiawa"
          desc="Projects installed on Oahu, touted as replacing the last coal fired
          plant on the big island."
          tag1="130MW"
          tag2="Hawaii"
          href="https://www.clearwayenergygroup.com/press-releases/clearway-completes-oahus-first-utility-scale-solar-storage-power-plant/"
        />
        <Card
          src={screenshot6.src}
          title="Townsite"
          desc="Townsite is a project located near Las Vegas with PV capacity to power 60,000 homes."
          tag1="232MW"
          tag2="Nevada"
          href="https://www.rosendin.com/project/townsite-solar-facility/"
        />
        <Card
          src={screenshot7.src}
          title="Athos l & ll"
          desc="Located near Joshua Tree, the combined Athos project powers up to 179,000 homes."
          tag1="641MW"
          tag2="California"
          href="https://www.rosendin.com/project/athos-i-ii/"
        />
        <Card
          src={screenshot8.src}
          title="Calhoun"
          desc="At 1,200 acres, the Calhoun project is one of the largest renewable plants in Michigan."
          tag1="200MW"
          tag2="Michigan"
          href="https://invenergy.com/news/invenergy-completes-construction-financing-for-calhoun-solar"
        />
      </section> */}
    </div>
  );
}
