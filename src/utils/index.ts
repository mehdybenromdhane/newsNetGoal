import { articles ,random } from "@/types";

export const removeDuplicateData = (articles: any) => {
  const randomArticle: articles[] = articles?.articles;
  const filterArticles = randomArticle?.filter(
    (article) => article?.source.id !== null
  );
  return filterArticles;
};



export const removeDuplicateRandomData = (random: any) => {
  const randomArticle: random[] = random?.sources;
  const filterArticles = randomArticle?.filter(
    (sources) => sources?.id !== null
  );
  return filterArticles;
};
 