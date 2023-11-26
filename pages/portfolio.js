import { createClient } from "contentful";
import Card from "../components/card";

export async function getServerSideProps() {
  // https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#server-side-rendering-getserversideprops

  const contentfulSpaceId = process.env.CONTENTFUL_SPACE_ID;
  const contentfulEnv = "master";
  const contentfulAPIKey = process.env.CONTENTFUL_API_KEY;

  // connect to contentful
  const client = createClient({
    space: contentfulSpaceId,
    environment: contentfulEnv, // defaults to 'master' if not set
    accessToken: contentfulAPIKey,
  });

  // fetch content for about
  const content = await client
    .getEntries({ content_type: "portfolio" })
    .then((entry) => {
      const content = entry.items;
      return content;
    })
    .catch(console.error);

  return { props: { content } };
}

export default function Portfolio({ content }) {
  return (
    <div className="flex flex-col items-center justify-start bg-white px-6 py-8 lg:px-8 rounded-lg">
      <div className="mx-auto max-w-2xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 text-center">
          Web Dev Portfolio
        </h1>
        {/* <h2 className="text-xl md:text-2xl font-normal tracking-tight text-gray-600 text-center"></h2> */}
        <p className="mt-6 text-center text-xl leading-8">
          Here are some highlights from my 2023 web development portfolio.
          Please reach out if you&apos;d like to learn more about a project.
        </p>
      </div>
      <section className="flex flex-wrap justify-center mb-8">
        {content.map((entry) => {
          return (
            <Card
              key={entry.fields.title}
              title={entry.fields.title}
              desc={entry.fields.description}
              // portfolio schema
              // fields: {
              //   title: 'Forest Fuel Finder',
              //   description: 'Digitized USDA firewood maps for collection around Bozeman, MT.',
              //   thumbnail: [Object]
              // }
              src={entry.fields.thumbnail.fields.file.url}
              // thumbnail schema
              // fields: {
              //   title: 'Forest Fuel Finder',
              //   description: 'Forest Fuel Finder logo',
              //   file: {
              //     url: '//images.ctfassets.net/46a0dzti1vzi/74TM1Bl75vFwzh9whjDr8D/a42aa283d540bb930a1b0ffc39d62a97/fff_logo.png',
              //     details: [Object],
              //     fileName: 'fff_logo.png',
              //     contentType: 'image/png'
              //   }
              url={entry.fields.url}
            />
          );
        })}
      </section>
    </div>
  );
}
