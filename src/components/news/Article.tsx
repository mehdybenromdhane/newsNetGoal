import { news } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Tag from "./Tag";

const Article = ({ data }: { data: news }) => {
  return (
      <div className=" border-b border-gray-300 mb-4 bg-white  rounded-lg  w-auto lg:mx-0 mx-5 mt-2 ">
        <div className="relative lg:w-full  h-[300px] top-0 ">
          <Image
            src={`${
              data?.urlToImage !== null
                ? data?.urlToImage
                : "/img/news-u-logo.webp"
            }`}
            alt={data?.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className=" p-5 ">
          <Link href={data?.url} legacyBehavior>
            <a target="_blank" className="font-bold text-lg my-10">
              {data?.title}
            </a>
          </Link>
        </div>
        <div className="flex space-x-4 px-5">
          <Tag data={data?.source.name} />
          <Tag data={data?.author} />
          <Tag data={new Date(data?.publishedAt).toDateString()} />
        </div>
        <p className="text-sm p-5">{data?.description}</p>
      </div>
  );
};

export default Article;
