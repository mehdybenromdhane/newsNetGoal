import Image from "next/image";
import { matchesType } from "@/types";

const Matches = ({ data }: { data: matchesType }) => {
  const getDate = new Date(data?.utcDate).toLocaleTimeString("tn", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="grid grid-cols-3">
      <div className="w-full flex items-center">
        <div className="w-[20px] h-[20px] relative mr-2">
          <Image
            src={data?.homeTeam?.crest!}
            alt={data?.homeTeam?.name!}
            fill
            className="object-cover"
          />
        </div>
        <div className="text-sm text-white">{data?.homeTeam?.name}</div>
      </div>
      <div className="px-2 m-auto flex justify-center items-center bg-tagPrimary rounded-md">
        {data?.status == "FINISHED" ? (
          <div className="py-1 text-white text-xs">
            {data?.score?.fullTime.home} : {data.score?.fullTime.away}
          </div>
        ) : (
          <div className="py-1 text-white text-xs">{getDate}</div>
        )}
      </div>
      <div className="w-full flex items-center justify-end">
        <div className="text-sm text-right text-white">
          {data.awayTeam?.name}
        </div>
        <div className="w-[20px] h-[20px] relative ml-2">
          <Image
            src={data?.awayTeam?.crest!}
            alt={data.awayTeam?.name!}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Matches;
