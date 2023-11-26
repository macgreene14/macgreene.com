import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Image from "next/image";
import { createClient } from "contentful";

export default async function Content() {
  const options = {
    //https://github.com/contentful/rich-text/blob/master/packages/rich-text-types/src/nodeTypes.ts

    renderNode: {
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="list-disc ml-4">{children}</ul>
      ), // note: same as "unordered-list" as str

      [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
        <Image
          className="aspect-square w-3/4 md:w-1/2 rounded-xl bg-gray-50 object-cover mx-auto my-4"
          src={`https://${node.data.target.fields.file.url}`}
          alt="Mac Greene Headshot"
          width={100}
          height={100}
        />
      ),
    },
  };

  const client = createClient({
    space: "46a0dzti1vzi",
    environment: "master", // defaults to 'master' if not set
    accessToken: "ZVJE51CHm0uRODqScHKwQo2IEn3_vqLVoV_1pJ8tQfo",
  });

  const content = await client
    .getEntry("5G3yTt87iy5RII8b8ZbNMd")
    .then((entry) => {
      return entry.fields.content.content;
    })
    .catch(console.error);

  const contentComponents = documentToReactComponents("content", options);

  return <div>{contentComponents}</div>;
}
