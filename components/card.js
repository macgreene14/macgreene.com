import Link from "next/link";

export default function Card(props) {
  return (
    <Link href={props.href}>
      <section className="flex flex-wrap justify-center p-4">
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 bg-gray-200 ">
          <img className="w-full h-96" src={props.src} alt={props.title} />
          <div className="px-6 py-4 h-30">
            <div className="font-bold text-xl mb-2">{props.title}</div>
            <p className="text-gray-700 text-base">{props.desc}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{props.tag1}
            </span>
            <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{props.tag2}
            </span>
          </div>
        </div>
      </section>
    </Link>
  );
}
