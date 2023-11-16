import { filterLeague } from "@/api";
import LeagueTable from "@/components/foot/LeagueTable";
import Image from "next/image";

const PrimeiraLiga = async () => {
  const getPrimeiraLiga = await filterLeague("Primeira Liga");
  return (
    <div className="">
      <div className="flex justify-center items-center text-2xl my-6   ">
        <Image
          className="mr-6"
          src="/img/leagues/liga_portugal.webp"
          alt="Primeira Lig"
          width={50}
          height={50}
        />
        Primeira Lig
      </div>
      {getPrimeiraLiga.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  );
};

export default PrimeiraLiga;
