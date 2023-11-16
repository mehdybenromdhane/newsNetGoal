import Link from "next/link";
import Image from "next/image";

type linkProps = {
  href: string;
  name: string;
  src: string;
};

const LinkSide = ({ href, name, src }: linkProps) => {
  return (
    <Link
      href="/football/(Leagues)"
      as={`/football/${href}`}
      className="flex items-center py-2 px-2 rounded-md text-white hover:bg-tagPrimary"
    >
      <Image src={src} alt={name} width={20} height={20} />
      <p className="ml-4 text-xl md:text-lg">{name}</p>
    </Link>
  );
};

export default LinkSide;
