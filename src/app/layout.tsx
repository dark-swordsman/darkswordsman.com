import NavLink from "../components/NavLink";
import SecondaryCard from "../components/SecondaryCard";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>Kyle Barr</title>
      <link rel="icon" type="image/png" href="/favicon.png" />
      <body className="bg-zinc-900 text-violet-100">
        <div className="container mx-auto px-4 lg:px-24">
          <div className="px-8 flex flex-col md:flex-row gap-4 text-center justify-between mb-4">
            <span className="self-center mt-4 md:mt-0">darkswordsman.com</span>
            <div className="flex gap-1 justify-between">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="https://links.darkswordsman.com" external>Socials</NavLink>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}