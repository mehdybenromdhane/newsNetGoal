
"use client";
import { getNewsSearch, getRandomNews } from "@/api";
import RandomArticle from "./RandomArticle";
import { removeDuplicateData, removeDuplicateRandomData } from "@/utils";

const RandomNews = async () => {
  const randomNews = await getRandomNews();
  const filterArticles = removeDuplicateRandomData(randomNews);


  return (
    <div className="w-[450px] border-l border-gray-300 basis-1/3 container mt-2  lg:mx-0 mx-auto">
      <h1 className="pl-2 text-2xl font-semibold text-primary">Channels News</h1>
      {filterArticles.map((s, idx) => (
        <div key={`${s.name}-${idx}`}>
          <RandomArticle data={s} />
        </div>
      ))}
    </div>
  );
};

export default RandomNews;
