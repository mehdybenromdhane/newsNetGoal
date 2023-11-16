import Sidebar from "@/components/foot/Sidebar";

import { getMatchesfootball, getMatchesfootballFinished } from "@/api";
import Status from "@/components/foot/Status";
export default async function TodayMatches() {
  const getDatas = await getMatchesfootball();
  const getDatasFinished = await getMatchesfootballFinished();

  const matchesDatas = getDatas?.matches;
  const matchesDatasFinished = getDatasFinished?.matches;

  const nd = new Date();
  const dateConvert = nd.toDateString();

  return (
    <section>
      <div className="px-4  mb-7 py-0 md:py-1 bg-primary rounded-md text-white text-sm">
        <p>{`${dateConvert}`}</p>
      </div>

      <Status
        matchesList={matchesDatas}
        matchesListFinished={matchesDatasFinished}
      />
    </section>
  );
}
