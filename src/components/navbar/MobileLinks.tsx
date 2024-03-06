"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import NavLink from "./NavLink";
import Link from "next/link";

export default function MobileLinks() {
  const [showBurger, setShowBurger] = useState(false);

  return (
    <div className="md:hidden h-full flex items-center hover:bg-gray-700 px-6 cursor-pointer" onClick={() => setShowBurger(!showBurger)}>
      <div className="text-xl select-none">H</div>
      {!showBurger ? null : 
          <div className="absolute w-full h-full bg-black opacity-50 left-0 top-0 z-10 duration-500 transition" />
      }
      {!showBurger ? null : 
        <div className="absolute bg-gray-800 h-full w-72 right-0 top-0 z-20">
          <ul className="flex flex-col">
            <SidebarNavLink href="/">Home</SidebarNavLink>
            <SidebarNavLink href="/resume">Resume</SidebarNavLink>
            <SidebarNavLink href="/portfolio">Portfolio</SidebarNavLink>
          </ul>
        </div>
      }
    </div>
  );
}

function SidebarNavLink({ children, href ="/" }: { children: ReactNode, href: string }) {
  return (
    <Link href={href} className="w-full h-16 flex justify-center items-center hover:bg-gray-700">{children}</Link>
  );
}