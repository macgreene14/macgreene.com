import screenshot1 from "../public/assets/img/skimail.png";
import screenshot2 from "../public/assets/img/weather-dashboard.png";
import screenshot3 from "../public/assets/img/tech-blog.png";
import screenshot4 from "../public/assets/img/novelty.png";

import screenshot5 from "../public/assets/img/mililani.png";
import screenshot6 from "../public/assets/img/townsite.png";
import screenshot7 from "../public/assets/img/athos.png";
import screenshot8 from "../public/assets/img/calhoun.png";

import Card from "../components/card";

export default function Portfolio() {
  console.log(screenshot1);
  return (
    <div className="flex flex-col items-center justify-start bg-gray-400">
      <h1 className="text-center backdrop-blur-2xl rounded-2xl pt-4">
        Web Development
      </h1>
      <section className="flex flex-wrap justify-center p-2">
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
          title="Weather Dashboard"
          desc="A minimalist dashboard for viewing current and forecasted weather
        for a selected city."
          tag1="Javascript"
          tag2="Bootstrap"
          href="https://macgreene14.github.io/weather-dashboard/"
        />

        <Card
          src={screenshot3.src}
          title="Blog"
          desc="A simple blog with authentication which allows users to post
          snippets of content."
          tag1="Handlebars"
          tag2="MongoDB"
          href="https://tech-blog-mgreene.herokuapp.com/"
        />

        <Card
          src={screenshot4.src}
          title="Novelty Book Swap"
          desc="A book sharing platform which connects via a communal library"
          tag1="Handlebars"
          tag2="MongoDB"
          href="https://www.skimail.co"
        />
      </section>

      <h1 className="text-center backdrop-blur-2xl rounded-2xl py-4">
        Solar Projects
      </h1>
      <section className="flex flex-wrap justify-center p-4">
        <Card
          src={screenshot5.src}
          title="Mililani & Waiawa"
          desc="Projects installed on Oahu, touted as replacing the last coal fired
          plant on the big island."
          tag1="130MW"
          tag2="Hawaii"
          href="https://www.skimail.co"
        />
        <Card
          src={screenshot6.src}
          title="Townsite"
          desc="A project located near Las Vegas. Capacity to power 60,000 homes."
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
          desc="A project on Oahu, touted as replacing the last coal fired power
          plant on the big island."
          tag1="200MW"
          tag2="Michigan"
          href="https://invenergy.com/news/invenergy-completes-construction-financing-for-calhoun-solar"
        />
      </section>
    </div>
  );
}
