import Link from "next/link";
import NormalLinks from "./NormalLinks";
import MobileLinks from "./MobileLinks";

export default function Navbar() {
  return (
    <div className="w-full flex justify-center h-14 bg-gray-950">
      <div className="w-[76rem] flex justify-between items-center md:px-8">
        <Link href="/" className="cursor-pointer">
          <span className="text-xl pl-8 md:pl-0">darkswordsman.com</span>
        </Link>
        <div className="h-full overflow-hidden">
          <NormalLinks />
          <MobileLinks />
        </div>
      </div>
    </div>
  );
}