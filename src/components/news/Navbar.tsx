"use client";


import React from "react";
import Link from "next/link";
import { FC, useState  } from "react";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  {
    id:1,
    href: "/allnews/general",
    label: "world",
  },
  {id:2,
    href: "/allnews/business",
    label: "Business",
  },
  {
    id:3,
    href: "/allnews/science",
    label: "Science",
  },
  {id:4,
    href: "/allnews/health",
    label: "Health",
  },
  {id:5,
    href: "/allnews/entertainment",
    label: "entertainment",
  },
  {id:6,
    href: "/allnews/sports",
    label: "Sports",
  },
  {id:7,
    href: "/allnews/technology",
    label: "technology",
  },
  {id:8,
    href: "/allnews/lifestyle",
    label: "Lifestyle",
  },
  {id:9,
    href: "/allnews/food",
    label: "Food",
  },
  {
    id:10,
    href: "/allnews/travel",
    label: "Travel",
  },
  {

    id:11,
    href: "/allnews/bitcoin",
    label: "Bitcoin",
  },
  {id:12,
    href: "/allnews/socialMedia",
    label: "Social Media",
  },
  {id:13,
    href: "/allnews/esport",
    label: "E-Sport",
  },
];
const Navbar: FC = () => {
  const path = usePathname();

  const [isClick, setisClick] = useState<any | false>();

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <nav className="   lg:mx-0 mx-5 w-auto ">
      <ul className="p-3 border-t  md:rounded-lg  rounded-t-lg  border-gray-300 mb-0 lg:mb-3 text-white w-auto  bg-[#04091e]">
        <li className="space-x-6   flex  md:flex text-lg    flex-wrap justify-between items-center  ">
          {links.map((link) => (

<React.Fragment key={link.id}>

            <Link
              href={link.href}
              className="hover:font-bold  md:flex hidden hover:text-[#f6214b] relative "
            >
              {link.href === path && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 top-full block h-[1px] w-full bg-tagPrimary"
                />
              )}
              {link.label}
            </Link>

            </React.Fragment>
          ))}
          <div className="md:hidden flex items-center  my-3   ">
            <button
              onClick={toggleNavbar}
              className=" inline-flex items-center justify-center  p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isClick ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
         
        </li>
      </ul>

      {isClick && (
        <div className="md:hidden  mb-7  ">
          <div className=" px-2 pt-2 pb-2 space-y-1 sm:px-3   bg-[#04091e]">
            {links.map((link) => (
              <React.Fragment key={link.id}>
              <Link
                href={link.href}
                className="hover:font-bold   text-white block hover:text-[#f6214b] relative "
              >
                {link.href === path && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-full block h-[1px] w-full bg-tagPrimary"
                  />
                )}
                {link.label}
              </Link>
              
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
