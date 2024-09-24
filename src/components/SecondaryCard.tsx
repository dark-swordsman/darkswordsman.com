export default function SecondaryCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full rounded-xl bg-zinc-800 flex flex-row justify-between px-8 py-4">
      {children}
    </div>
  );
}