import Link from "next/link";
import Image from "next/image";

export default function Card({ title, desc, src, url }) {
  return (
    <Link href={url}>
      <section className="flex flex-wrap justify-center p-4">
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 bg-gray-200 ">
          <Image
            className="w-full sm:h-96"
            src={src}
            alt={title}
            width={100}
            height={100}
          />
          <div className="px-6 py-4 h-30">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{desc}</p>
          </div>
        </div>
      </section>
    </Link>
  );
}
