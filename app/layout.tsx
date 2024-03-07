"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body >
        <div className="relative w-full flex item-center justify-center" >
          <Navbar/>
        </div>
        {children}
        </body>
    </html>
  );
}
