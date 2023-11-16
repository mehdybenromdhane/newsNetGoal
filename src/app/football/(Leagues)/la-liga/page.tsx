import { filterLeague } from "@/api";
import LeagueTable from "@/components/foot/LeagueTable";
import Image from "next/image";

const LaLiga = async () => {
  const getLaLiga = await filterLeague("Primera Division");

  console.log(getLaLiga);
  return (
    <div className="">
      <div className="flex justify-center items-center text-2xl my-6   ">
        <Image
          className="mr-6"
          src="/img/leagues/laliga.svg"
          alt="la-liga"
          width={50}
          height={50}
        />
        La-liga
      </div>

      {getLaLiga.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  );
};

export default LaLiga;
