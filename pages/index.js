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
        <div className="mx-auto max-w-2xl text-base leading-7 text-gray-700">
          {/* <p className="text-md font-semibold leading-7 text-indigo-600 text-center">
          Mac Greene
        </p> */}
          <h1 className="mt-2 text-3xl font-normal tracking-tight text-gray-600 sm:text-4xl text-center">
            Small Business
          </h1>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            Technology Solutions
          </h1>
          <p className="mt-6 text-xl leading-8">
            I specialize in crafting bespoke software solutions tailored to your
            specific business needs to supercharge your workflows. Let me handle
            the intricacies of software development and implementation, so you
            can focus on the essential business activities that make the beer
            taste better. Contact today for a free consultation.
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
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Excel-to-Cloud Migrations
                  </strong>{" "}
                  Port your spreadsheet calculators into a web-native format to
                  unlock unbounded automation capabilities.
                </span>
              </li>
            </ul>
          </div>

          <figure className="mt-8">
            <Image
              className="aspect-square w-3/4 md:w-1/2 rounded-xl bg-gray-50 object-cover mx-auto"
              src="https://ik.imagekit.io/bamlnhgnz/compy2.png?"
              alt="Retro Computer"
              width={100}
              height={100}
            />
          </figure>
          <div className="my-8 text-center">
            <Link
              type="button"
              className="rounded-md bg-white px-8 py-3.5 text-lg font-bold text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 hover:bg-gray-100"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
