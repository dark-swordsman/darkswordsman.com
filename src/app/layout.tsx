import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800 text-sky-100">
        <div className="container mx-auto px-4 lg:px-24">
          {children}
        </div>
      </body>
    </html>
  )
}