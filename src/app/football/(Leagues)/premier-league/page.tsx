import { filterLeague } from "@/api";
import LeagueTable from "@/components/foot/LeagueTable";
import Image from "next/image";

const English = async () => {
  const getEnglishLeague = await filterLeague("Premier League");

  return (
    <div className="">
      <div className="flex justify-center items-center text-2xl my-6   ">
        <Image
          className="mr-6"
          src="/img/leagues/premier_league.webp"
          alt="Premier League"
          width={50}
          height={50}
        />
        Premier League
      </div>
      {getEnglishLeague.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  );
};

export default English;
