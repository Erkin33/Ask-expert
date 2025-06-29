import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/assets/components/header";
import { Lato } from 'next/font/google'
const lato = Lato({
  subsets: ['latin'],
  weight: '400'
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AskExperts",
  description: "Made by @Erkin_44",
  icons: {
    icon:"/Icons/Logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lato.className}>
      <body
        className={` antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
