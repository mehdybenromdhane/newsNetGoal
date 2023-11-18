import { articles } from "@/types";

export const removeDuplicateData = (articles: any) => {
  const randomArticle: articles[] = articles?.articles;
  const filterArticles = randomArticle?.filter(
    (article) => article?.source.id !== null
  );
  return filterArticles;
};
 