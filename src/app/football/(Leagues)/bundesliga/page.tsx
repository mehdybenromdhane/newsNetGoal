import { filterLeague } from "@/api";
import LeagueTable from "@/components/foot/LeagueTable";
import Image from "next/image";

const Bundesliga = async () => {
  const getBundesliga = await filterLeague("Bundesliga");
  return (
    <div className="">
      <div className="flex justify-center items-center text-2xl my-6   ">
        <Image
          className="mr-6"
          src="/img/leagues/bundesliga.webp"
          alt="Bundesliga"
          width={50}
          height={50}
        />
        Bundesliga
      </div>
      {getBundesliga.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  );
};

export default Bundesliga;
