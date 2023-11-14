"use client";
import { getNewsTopHeadlines } from "@/api";
import { removeDuplicateData } from "@/utils";
import Article from "./Article";

const TopHeadlines = async () => {
  const newsTop = await getNewsTopHeadlines();
  const filterArticles = removeDuplicateData(newsTop);

  return (
    <>
      {filterArticles?.map((article, idx) => (
        <div key={`${article?.title}-${idx}`}>
          <Article data={article} />
        </div>
      ))} 
    </> 
  ); 
}; 

export default TopHeadlines;
