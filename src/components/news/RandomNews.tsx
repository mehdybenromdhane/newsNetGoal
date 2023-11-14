import { getNewsSearch } from "@/api";
import RandomArticle from "./RandomArticle";
import { removeDuplicateData } from "@/utils";

const RandomNews = async () => {
  const randomNews = await getNewsSearch("random news");
  const filterArticles = removeDuplicateData(randomNews);

  return (
    <div className="w-[450px] border-l border-gray-300 basis-1/3 container mt-2  lg:mx-0 mx-auto">
      <h1 className="pl-2 text-2xl font-semibold text-primary">Random News</h1>
      {filterArticles?.map((article, idx) => (
        <div key={`${article?.title}-${idx}`}>
          <RandomArticle data={article} />
        </div>
      ))}
    </div>
  );
};

export default RandomNews;
