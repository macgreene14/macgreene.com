import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white px-6 py-8 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        {/* <p className="text-md font-semibold leading-7 text-indigo-600">
          Bozeman, MT
        </p> */}
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
          Technology Solutions
        </h1>
        <p className="mt-6 text-xl leading-8">
          {" "}
          We understand the unique challenges faced by small and mid-sized
          businesses in today`s digital landscape. Our dedicated team
          specializes in crafting bespoke web solutions tailored to your
          specific needs, allowing you to concentrate on what truly matters. Let
          us handle the intricacies of software development, so you can focus on
          the essential business activities that make the beer taste even
          better. Partner with us, and watch your digital dreams come to life.
        </p>

        <div className="mt-10 max-w-2xl">
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Website Design
                </strong>{" "}
                Choose between a site built with Shopify, Wix, Webflow, or a
                completely custom website.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Software Development
                </strong>{" "}
                We offer development services ranging from small utility
                functions to full stack web applications.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Enterprise Architecture
                </strong>{" "}
                Let us help you implement bespoke software infrastructure to
                streamline your critical business activities.
              </span>
            </li>
          </ul>
        </div>
        <div className="my-8 text-center">
          <Link
            type="button"
            className="rounded-md bg-white px-6 py-3 text-md font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            href="/contact"
          >
            Contact Us
          </Link>
        </div>
        <figure className="mt-8">
          <Image
            className="aspect-square w-1/2 rounded-xl bg-gray-50 object-cover mx-auto"
            src="https://ik.imagekit.io/bamlnhgnz/compy2.png?"
            alt="Retro Computer"
            width={100}
            height={100}
          />
          {/* <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon
              className="mt-0.5 h-5 w-5 flex-none text-gray-300"
              aria-hidden="true"
            />
            Mac Greene
          </figcaption> */}
        </figure>
        {/* <figure className="mt-10 border-l border-indigo-600 pl-9">
          <blockquote className="font-semibold text-gray-900">
            <p>
              “Vel ultricies morbi odio facilisi ultrices accumsan donec lacus
              purus. Lectus nibh ullamcorper ac dictum justo in euismod. Risus
              aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim
              tristique.”
            </p>
          </blockquote>
          <figcaption className="mt-6 flex gap-x-4">
            <img
              className="h-6 w-6 flex-none rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="text-sm leading-6">
              <strong className="font-semibold text-gray-900">
                Maria Hill
              </strong>{" "}
              – Marketing Manager
            </div>
          </figcaption>
        </figure> */}
      </div>
    </div>
  );
}
