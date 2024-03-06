import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "darkswordsman.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-dvh bg-gray-900 text-white flex flex-col`}>
        <div className="grow-0 shrink basis-auto">
          <Navbar />
        </div>
        <div className="h-dvh overflow-y-auto grow shrink basis-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
