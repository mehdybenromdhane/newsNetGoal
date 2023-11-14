import { getNewsSearch } from "@/api";
import Article from "@/components/news/Article";
import { removeDuplicateData } from "@/utils";

const Sports = async () => {
  const newsWorld = await getNewsSearch("sports");
  const filterArticles = removeDuplicateData(newsWorld);

  return (
    <div className="lg:w-[700px]">
      {filterArticles.map((article, idx) => (
        <div key={`${article?.title}-${idx}`}>
          <Article data={article} />
        </div>
      ))}
    </div>
  );
};

export default Sports;
