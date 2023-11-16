import { filterLeague } from "@/api";
import LeagueTable from "@/components/foot/LeagueTable";
import Image from "next/image";

const SerieA = async () => {
  const getSerieA = await filterLeague("Serie A");
  return (
    <div className="">
      <div className="flex justify-center items-center text-2xl my-6   ">
        <Image
          className="mr-6"
          src="/img/leagues/serie_a.webp"
          alt="Serie A"
          width={50}
          height={50}
        />
        Serie A
      </div>
      {getSerieA.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  );
};

export default SerieA;
