import Link from "next/link";

export default function ContentLink({ children, href, newTab }: { children: React.ReactNode, href: string, newTab?: boolean }) {
  return (
    <Link className="text-violet-400 hover:text-violet-300 hover:underline underline-offset-2" href={href} target={newTab ? "_blank" : "_self"}>{children}</Link>
  );
}