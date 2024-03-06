import Link from "next/link";
import NavLink from "./NavLink";

export default function Navbar() {
    return (
        <div className="w-full flex justify-center h-14 bg-gray-950">
          <div className="w-[76rem] flex justify-between items-center grow-0 px-8">
            <Link href="/" className="cursor-pointer">
              <span className="text-xl">darkswordsman.com</span>
            </Link>
            <div className="h-full">
              <ul className="flex h-full items-center">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/">Portfolio</NavLink>
                <NavLink href="/">Resume</NavLink>
              </ul>
            </div>
          </div>
        </div>
    );
}