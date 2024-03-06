import Link from "next/link";
import { ReactNode } from "react";

export default function NavLink({ children, href }: { children: ReactNode, href: string }) {
    return (
        <li className="h-full flex">
            <Link href={href} className="hover:bg-gray-700 h-full px-5 cursor-pointer flex items-center">
                <span>{children}</span>
            </Link>
        </li>
    );
}