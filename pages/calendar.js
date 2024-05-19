import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

export default function Calendar() {
  return (
    <div>
      <div className="bg-white px-6 py-8 lg:px-8 rounded-lg">
        <div className="mx-auto max-w-2xl text-base leading-7 text-gray-700">
          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 text-center">
            Bozeman Calendar
          </h1>
          {/* <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-gray-600  text-center">
            for Small Businesses
          </h2> */}
          <p className="mt-6 text-xl leading-8">
            Connect this event calendar to your favorite calendar app to stay
            up-to-date with all the happenings in Bozeman. This calendar is
            updated regularly with events from the Bozeman Chamber of Commerce,
            the Bozeman Daily Chronicle, and other local sources.
          </p>

          <div className="mt-10">
            <ul
              role="list"
              className="mt-8 max-w-xl mx-auto space-y-8 text-gray-600"
            >
              <li>
                <div class="w-full mx-auto">
                  <label
                    for="url-input"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Bozeman Calendar URL
                  </label>
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="text"
                      id="url-input"
                      value="https://bozeman-calendar.s3.us-west-2.amazonaws.com/events.ics"
                      readonly
                      class="block w-full pr-10 text-gray-900 bg-gray-200 border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm cursor-pointer"
                    />
                    {/* <button
                      onclick={copyToClipboard}
                      class="absolute inset-y-0 right-0 px-3 py-1 bg-indigo-500 text-white font-medium text-sm rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Copy
                    </button> */}
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <h2 className="mt-14 text-xl md:text-2xl font-bold tracking-tight text-gray-900 text-center">
            Connecting to your Google Calendar
          </h2>
          <p className="mt-6 text-xl leading-8">
            On your computer, open Google Calendar. On the left, next to Other
            calendars click Add Add other calendars and then From URL. Enter the
            calendars address. Click Add calendar. The calendar appears on the
            left, under Other calendars.
          </p>
          <figure className="mt-8">
            <Image
              className="aspect-square w-1/2 rounded-xl bg-gray-50 object-cover mx-auto"
              src="https://images.ctfassets.net/46a0dzti1vzi/3V5NQ7zvmvpZ4V6SHwdL8C/6f3c240fc0fca84a01ae618b3d142ae8/Screenshot_2024-05-19_at_12.43.04_PM.png?"
              alt="Bozeman Calendar Logo"
              width={100}
              height={100}
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
