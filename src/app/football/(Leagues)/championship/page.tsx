import { filterLeague } from "@/api";
import LeagueTable from "@/components/foot/LeagueTable";
import Image from "next/image";

const Championship = async () => {
  const getChampionship = await filterLeague("Championship");
  return (
    <div className="">
      <div className="flex justify-center items-center text-2xl my-6   ">
        <Image
          className="mr-6"
          src="/img/leagues/championship.webp"
          alt="Championship"
          width={50}
          height={50}
        />
        Championship
      </div>
      {getChampionship.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  );
};

export default Championship;
