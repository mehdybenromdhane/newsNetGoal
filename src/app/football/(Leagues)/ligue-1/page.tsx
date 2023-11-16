import { filterLeague } from "@/api";
import LeagueTable from "@/components/foot/LeagueTable";
import Image from "next/image";

const Ligue1 = async () => {
  const getLigue1 = await filterLeague("Ligue 1");
  return (
    <div className="">
      <div className="flex justify-center items-center text-2xl my-6   ">
        <Image
          className="mr-6"
          src="/img/leagues/ligue_1.webp"
          alt="Ligue 1"
          width={50}
          height={50}
        />
        Ligue 1
      </div>
      {getLigue1.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  );
};

export default Ligue1;
