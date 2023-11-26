import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { createClient } from "contentful";

export async function getServerSideProps() {
  // https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#server-side-rendering-getserversideprops

  const aboutEntryId = "5G3yTt87iy5RII8b8ZbNMd";
  const contentfulEnv = "master";
  const contentfulAPIKey = process.env.CONTENTFUL_API_KEY;
  const contentfulSpaceId = process.env.CONTENTFUL_SPACE_ID;

  // connect to contentful
  const client = createClient({
    space: contentfulSpaceId,
    environment: contentfulEnv, // defaults to 'master' if not set
    accessToken: contentfulAPIKey,
  });

  // fetch content for about
  const content = await client
    .getEntry(aboutEntryId)
    .then((entry) => {
      const content = entry.fields.content;
      return content;
    })
    .catch(console.error);

  return { props: { content } };
}

export default function About({ content }) {
  const options = {
    //https://github.com/contentful/rich-text/blob/master/packages/rich-text-types/src/nodeTypes.ts

    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="text-lg font-bold">{children}</h2>
      ),

      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="list-disc ml-8">{children}</ul>
      ), // note: same as "unordered-list" as str

      [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
        <Image
          className="aspect-square w-1/2 rounded-xl bg-gray-50 object-cover mx-auto mt-8"
          src={`https://${node.data.target.fields.file.url}`}
          alt="Mac Greene Headshot"
          width={100}
          height={100}
        />
      ),
    },
  };

  // convert document object to react component
  const contentComponents = documentToReactComponents(content, options);

  return (
    <div>
      <div className="bg-white px-6 py-8 lg:px-8 rounded-lg">
        <div className="mx-auto max-w-xl text-base leading-7 text-gray-700">
          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 text-center">
            About
          </h1>
          <div>{contentComponents}</div>
        </div>
      </div>
    </div>
  );
}
