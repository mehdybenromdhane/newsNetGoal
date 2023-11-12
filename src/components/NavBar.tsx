import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <div className="flex justify-around items-center my-4">
      <Link href="/allnews" className="flex items-center space-x-2">
        <span className="text-2xl font-bold none md:block">Today News</span>
      </Link>
      <Link
        href="/football/premier-league"
        className="flex items-center space-x-2"
      >
        <div className="relative w-[30px] h-[30px]">
          <Image
            src="/football-icon.png"
            alt="icon"
            fill
            className="object-cover"
          />
        </div>
        <span className="text-2xl font-bold none md:block">Football info</span>
      </Link>

      <p className="text-xs md:text-sm">created by Mehdy</p>
    </div>
  );
};

export default Navbar;
