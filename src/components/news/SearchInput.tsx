"use client";

import { useState, FormEvent } from "react";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/navigation";

const SearchInput = () => {
  const [keywords, setKeywords] = useState<string>("");
  const router = useRouter();

  const searchKeywords = (e: FormEvent) => {
    e.preventDefault();
    if (!keywords) {
      router.push("/");
    } else {
      router.push(`/allnews/search?q=${keywords}`); 
    }
  };

  return (
    <>
      <form onSubmit={searchKeywords} className="sticky ">
        <div className="bg-white items-center justify-between  flex rounded-full shadow-sm py-1 ">
          <div>
            <div className="px-2 mr-1 rounded-full hover:bg-gray-100 cursor-pointer">
              <svg
                className="h-5 w-5 text-tagPrimary"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <input
            className="font-bold uppercase rounded-full w-full my-2 py-1 pl-3 text-[#04091e] bg-gray-100 focus:outline-none focus:shadow-outline lg:text-xs text-xs"
            type="text"
            placeholder="Search"
            onChange={(e) => setKeywords(e.target.value)}
          />

          <button type="submit">
            <div className="bg-tagPrimary p-1  hover:bg-blue-400 cursor-pointer mx-2 rounded-full">
              <svg
                className="w-4 h-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchInput;
