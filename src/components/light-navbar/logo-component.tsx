import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/" className="no-underline outline-none">
        <Image
          src="/images/_Logo.svg"
          width={100}
          height={32}
          alt="delve logo"
        />
      </Link>
    </>
  );
};

export default Logo;
