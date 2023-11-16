import { filterLeague } from "@/api";
import LeagueTable from "@/components/foot/LeagueTable";
import Image from "next/image";

const CopaLibertadores = async () => {
  const getCopaLibertadores = await filterLeague("Copa Libertadores");
  return (
    <div className="">
      <div className="flex justify-center items-center text-2xl my-6   ">
        <Image
          className="mr-6"
          src="/img/leagues/copa_libertadores.webp"
          alt="Copa Libertadores"
          width={50}
          height={50}
        />
        Copa Libertadores
      </div>
      {getCopaLibertadores.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  );
};

export default CopaLibertadores;
