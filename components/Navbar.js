import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-6 ">
      <Link href={"/"} className="font-bold text-white">
        Album 0
      </Link>
    </nav>
  );
};
