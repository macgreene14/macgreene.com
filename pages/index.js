import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="bg-white px-6 py-8 lg:px-8 rounded-lg">
        <div className="mx-auto max-w-xl text-base leading-7 text-gray-700">
          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 text-center">
            About
          </h1>
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-gray-600  text-center mt-0">
            Mac Greene
          </h2>
          <p className="mt-6 text-xl leading-8">
            As an F.E. certified engineer, I bring a diverse background in
            utility solar project design, gravity-fed water system design, and
            software development to the table.
          </p>

          <p className="mt-6 text-xl leading-8">
            Currently, I&apos;m harnessing the power of web tools to address
            real-world challenges faced by small businesses.
          </p>

          <p className="mt-6 text-xl leading-8">
            I&aposm always on the lookout to collaborate with teams that share a
            passion for problem-solving and making an impact. I&aposm
            particularly interested in utilizing tech to assist with the many
            pressing environmental issues at-hand.
          </p>

          <figure className="mt-8">
            <Image
              className="aspect-square w-3/4 md:w-1/2 rounded-xl bg-gray-50 object-cover mx-auto"
              src="https://ik.imagekit.io/bamlnhgnz/headshot.jpeg?updatedAt=1696872069655"
              alt="Mac Greene Headshot"
              width={100}
              height={100}
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
