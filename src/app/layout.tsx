import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-violet-100">
        <div className="container mx-auto px-4 lg:px-24 py-12">
          {children}
        </div>
      </body>
    </html>
  )
}