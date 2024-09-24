import Link from "next/link";

export default function ProjectsLayout({ children }: { children: string }) {
  return (
    <div className="flex flex-col gap-6">
      <Link href="/" className="hover:underline underline-offset-4 w-fit rounded-lg px-3 py-1">{"< Return To Home"}</Link>
      {children}
    </div>
  );
}