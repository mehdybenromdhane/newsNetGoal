import Image from "next/image";
import Link from "next/link";

import soccer from "../../public/img/soccer.jpg";
import news from "../../public/img/news.jpg";
export default function Home() {
  return (
    <main className="">
      <div className="grid h-[80vh] fade-in-fwd  md:grid-cols-2 w-screen p-14">
        {/* first column */}

        <div className="     hover:text-xl transition-all duration-500  relative flex justify-center items-center ">
          <Image
            src={soccer}
            alt="soccer"
            className=" rounded-l-lg  grayscale-[50%] hover:grayscale-0 hover:transition hover:duration-300 hover:ease-in-out   object-cover w-full h-full absolute top-0 left-0"
          />
          <Link href="/football">
            <div className="px-8 py-32">
              <div className="grid gap-8 items-start justify-center">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                    <span className="flex items-center space-x-5">
                      <span className="pr-6 text-gray-100">
                        Footbal Matches
                      </span>
                    </span>
                    <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">
                      See today matches &rarr;
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </div>
        {/* first column */}

        {/* second column */}
        <div className=" hover:text-xl  transition-all duration-500 relative flex justify-center items-center ">
          {/* <span className=" tracking-in-expand"> Public News</span> */}

          <Image
            src={news}
            alt="news"
            className=" rounded-r-lg  grayscale-[50%] hover:grayscale-0 hover:transition hover:duration-300 hover:ease-in-out   object-cover w-full h-full absolute top-0 left-0"
          />

          <Link href="/allnews">
            <div className="px-8 py-32">
              <div className="grid gap-8 items-start justify-center">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                    <span className="flex items-center space-x-5">
                      <span className="pr-6 text-gray-100">News </span>
                    </span>
                    <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">
                      See today news &rarr;
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </div>
        {/* second column */}
      </div>
    </main>
  );
}
