import screenshot1 from "../public/assets/img/weather-dashboard.png";
export default function Portfolio() {
  console.log(screenshot1);
  return (
    <div>
      <h1 className="text-gray-800 font-normal text-3xl sm:text-5xl md:text-6xl my-2 sm:my-5 text-center">
        Portfolio Pieces
      </h1>
      <section className="flex flex-wrap justify-center p-4">
        {/* Card 1 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg border-2 m-4 ">
          <img
            className="w-full"
            src={screenshot1.src}
            alt="weather-dashboard"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Weather Dashboard</div>
            <p className="text-gray-700 text-base">
              A minimalist dashboard for viewing current weather in a selected
              city. Current and 5-day forecated are rendered to view.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Javascript
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Bootstrap
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg border-2  m-4 ">
          <img
            className="w-full"
            src={screenshot1.src}
            alt="weather-dashboard"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Weather Dashboard</div>
            <p className="text-gray-700 text-base">
              A minimalist dashboard for viewing current weather in a selected
              city. Current and 5-day forecated are rendered to view.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Javascript
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Bootstrap
            </span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg border-2  m-4">
          <img
            className="w-full"
            src={screenshot1.src}
            alt="weather-dashboard"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Weather Dashboard</div>
            <p className="text-gray-700 text-base">
              A minimalist dashboard for viewing current weather in a selected
              city. Current and 5-day forecated are rendered to view.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Javascript
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Bootstrap
            </span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg border-2  m-4 ">
          <img
            className="w-full"
            src={screenshot1.src}
            alt="weather-dashboard"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Weather Dashboard</div>
            <p className="text-gray-700 text-base">
              A minimalist dashboard for viewing current weather in a selected
              city. Current and 5-day forecated are rendered to view.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Javascript
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Bootstrap
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
