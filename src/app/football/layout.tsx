
import Sidebar from "@/components/foot/Sidebar";
import type { Metadata } from "next";
import News from "../news/page";
import TodayMatches from "@/components/foot/TodayMatches";
import SerieA from "./(Leagues)/serie-a/page";
import English from "./(Leagues)/premier-league/page";

export const metadata: Metadata = {
  title: "Football matches",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Sidebar />
      <a href="#news">
        <div className="py-4 flex justify-center  md:hidden">
          <div className="grid gap-8 items-start justify-center">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                <span className="flex items-center space-x-5">
                  <span className="pr-6 text-gray-100">Footbal Matches</span>
                </span>
                <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">
                  See today news &rarr;
                </span>
              </button>
            </div>
          </div>
        </div>
      </a>

      <div className="flex   flex-col p-4 m-10 gap-10  md:p-0 md:flex-row md:justify-around  ">
        <TodayMatches />

        {children}

        <section id="news">
          <News />
        </section>
      </div>
    </div>
  );
}
