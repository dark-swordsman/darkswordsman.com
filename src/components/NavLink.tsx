import Link from "next/link";

export default function NavLink({ children, href, external }: { children: React.ReactNode, href: string, external?: boolean }) {
  return (
    external ?
      <a target="_blank" href={href} className="hover:underline underline-offset-4 px-4 py-3 after:content-['_↗']">{children}</a>
      :
      <Link href={href} className="hover:underline underline-offset-4 px-4 py-3">{children}</Link>
  );
}