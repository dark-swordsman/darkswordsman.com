import type { Metadata } from "next";
import Footer from "../components/Footer";
import NavLink from "../components/NavLink";
import "./globals.css";

export const metadata: Metadata = {
  title: "darkswordsman.com",
  description: "Kyle Barr's website",
  icons: "/favicon.png",
  openGraph: {
    title: "darkswordsman.com",
    description: "Kyle Barr's website",
    images: "/favicon.png"
  },
  twitter: {
    title: "darkswordsman.com",
    description: "Kyle Barr's website",
    images: "/favicon.png"
  }
};

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
        <div className="container mx-auto px-4 xl:px-36 2xl:px-48">
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
        <Footer />
      </body>
    </html>
  )
}