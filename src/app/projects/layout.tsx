import Link from "next/link";

export default function ProjectsLayout({ children }: { children: string }) {
  return (
    <div className="flex flex-col gap-8">
      <Link href="/" className="text-lg hover:underline underline-offset-4 w-fit rounded-lg px-3 py-1 bg-zinc-700 hover:bg-zinc-600">{"< Return To Home"}</Link>
      {children}
    </div>
  );
}