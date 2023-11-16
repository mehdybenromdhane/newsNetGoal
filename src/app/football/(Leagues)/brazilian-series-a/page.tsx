import { filterLeague } from "@/api";
import LeagueTable from "@/components/foot/LeagueTable";
import Image from "next/image";

const Brasileiro = async () => {
  const getBrasileiro = await filterLeague("Campeonato Brasileiro Série A");
  return (
    <div className=" ">
      <div className="flex justify-center items-center text-2xl  my-6   ">
        <Image
          className="mr-6"
          src="/img/leagues/brazilian_serie_a.webp"
          alt="Brazilian Championship Series A"
          width={50}
          height={50}
        />
        Brazilian Championship Series A
      </div>
      {getBrasileiro.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  );
};

export default Brasileiro;
