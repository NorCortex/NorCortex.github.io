import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const MontserratFont = Montserrat({
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Paranormal Lab",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${MontserratFont.variable} antialiased`}
      >
      <Navbar />
        {children}
      </body>
    </html>
  );
}
