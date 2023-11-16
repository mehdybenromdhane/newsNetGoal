import { apiOptions, matchesType } from "@/types";

const options: apiOptions = {
  next: { revalidate: 30 },
  headers: {
    "X-Auth-Token": process.env.API_TOKEN,
    "Content-Type": "application/json",
  },
};
export const getMatchesfootball = async () => {
  const matchData = await fetch(
    "https://api.football-data.org/v4/matches",
    options
  );
  return matchData.json();
};

const todayDate = new Date();
const getDateMonth = new Date(todayDate.getTime());
getDateMonth.setDate(todayDate.getDate() - 1);
const year = getDateMonth.getFullYear();
const month = String(getDateMonth.getMonth() + 1).padStart(2, "0");
const day = String(getDateMonth.getDate()).padStart(2, "0");

const yesterday = [year, month, day].join("-");

export const getMatchesfootballFinished = async () => {
  const matchData = await fetch(
    `https://api.football-data.org/v4/matches?date=${yesterday}`,
    options
  );

 
  return matchData.json();
};

export const getNewsInfo = async () => {
  const newsData = await fetch(
    `https://newsapi.org/v2/everything?apiKey=${process.env.NEXT_PUBLIC_API_TOKEN_NEWS}&q=soccer&pageSize=5`,
    { next: { revalidate: 30 } }
  );
  return newsData.json();
};

export const filterLeague = async (filterData: string) => {
  const getEnglishLeague = await getMatchesfootball();
  const filterPremierLeague: matchesType[] = getEnglishLeague?.matches;
  const getData = filterPremierLeague.filter(
    (item) => item.competition.name === filterData
  );

  console.log(getEnglishLeague);

  return getData;
};

export const getNewsTopHeadlines = async () => {
  const newsData = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_API_TOKEN_NEWS}`,
    { cache: "no-store" }
  );

  return newsData.json();
};

export const getNewsSearch = async (keyword: string) => {
  const newsData = await fetch(
    `https://newsapi.org/v2/everything?apiKey=${process.env.NEXT_PUBLIC_API_TOKEN_NEWS}&q=${keyword}&pageSize=10`,
    { cache: "no-store" }
  );
  return newsData.json();
};
