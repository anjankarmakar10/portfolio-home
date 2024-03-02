import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-10 z-50 bg-transparent fixed w-full text-white top-0  w-full px-28 flex font-medium justify-between items-center">
      <h1 className="font-bold text-[42px] text-[#f31e5e]">
        MONNU<span className="text-white">.</span>{" "}
      </h1>
      <ul className="flex items-center gap-8">
        <li>
          {" "}
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          {" "}
          <Link href={"/"}>About</Link>
        </li>
        <li>
          {" "}
          <Link href={"/"}>Portfolio</Link>
        </li>
        <li>
          {" "}
          <Link href={"/"}>Service</Link>
        </li>
        <li>
          {" "}
          <Link href={"/"}>Testimonial</Link>
        </li>
        <li>
          {" "}
          <Link href={"/"}>Blog</Link>
        </li>
        <li>
          {" "}
          <Link href={"/"}>Contact</Link>
        </li>
      </ul>
      <div className="flex gap-[14px] items-center">
        <div>Intro</div>
        <button>
          <Image src="/menu.png" alt="menu" width={24} height={24} />
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
