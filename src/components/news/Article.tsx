import { articles } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Tag from "./Tag";
import { PageWrapper } from "../page-wrapper";

const Article = ({ data }: { data: articles }) => {
  return (
    <PageWrapper>
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
          <Tag data={data?.title} />
          <Tag data={new Date(data?.publishedAt).toDateString()} />
        </div>
        <p className="text-sm p-5">{data?.content}</p>
      </div>
    </PageWrapper>
  );
};

export default Article;
