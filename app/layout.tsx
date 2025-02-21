import Navbar from "@/components/navbar";
import type { Metadata } from "next";
// import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import "./globals.css";


export const metadata: Metadata = {
  title: "Blåkuk 2025",
  description: "The trip of a lifetime",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistMono.className} antialiased w-screen min-h-screen flex flex-col bg-blue text-white`}
      >
        {/* <div className="fixed top-0 left-0 right-0 z-50"> */}
        {/*   <Navbar /> */}
        {/* </div> */}
        <main className="flex-1 w-full flex items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
