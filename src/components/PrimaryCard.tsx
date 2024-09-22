export default function PrimaryCard({ children, title }: { children: React.ReactNode, title: string }) {
  return (
    <div className="py-6 px-8 flex flex-col gap-4 rounded-xl bg-violet-950">
      <span className="text-2xl font-semibold">{title}</span>
      <div>
        {children}
      </div>
    </div>
  )
}