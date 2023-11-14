import Image from "next/image";
import Link from "next/link";
import { getNewsInfo } from "@/api";
import { newsType } from "@/types";
import TopHeadlines from "@/components/news/TopNews";
import RandomNews from "@/components/news/RandomNews";
import { Suspense } from "react";

const Allnews = async () => {
  return (
    <>
        <div className="lg:w-[700px]">

      <TopHeadlines />
      </div>
    </>
  );
};

export default Allnews;
