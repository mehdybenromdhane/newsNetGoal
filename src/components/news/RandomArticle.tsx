import { articles, random } from "@/types";
import Image from "next/image";
import Tag from "./Tag";
import Link from "next/link";

const RandomArticle = ({ data }: { data: random }) => {
  return (
    <div className="flex justify-between gap-2 p-2 mb-4 border-b border-gray-300">
      <div>
        <Link href={data?.url} legacyBehavior>
          <a target="_blank" className="text-sm">
            {data?.name}
          </a>
        </Link>
        <div className="flex flex-col space-y-2 max-w-max my-2">
          <Tag data={data?.name} />
        </div>
      </div>
      <div className="relative w-[400px] h-[200px]">
      <p className="text-sm p-5">{data?.description}</p>

      </div>
    </div>
  );
};

export default RandomArticle;
