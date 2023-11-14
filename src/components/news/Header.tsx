import Image from "next/image";
import { FC } from "react";
import Link from "next/link";

const Header: FC = () => {
  return (
    <nav className="flex justify-between items-center py-1 container mx-auto mt-6 ">
      <Link href="/allnews">
        <div className="relative w-48 h-20">
          <Image src="/news.png" alt="logo" fill className="object-contain" />
        </div>
      </Link>
    </nav>
  );
};

export default Header;
