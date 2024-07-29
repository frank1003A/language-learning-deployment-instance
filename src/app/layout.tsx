import type { Metadata } from "next";
import { Inter, Fira_Sans_Condensed } from "next/font/google";

import "./globals.css";

import Progress_bar from "~/components/progress-bar";
import { Toaster } from "~/components/ui/toaster";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Delve - Language Learning AI 3D Game",
  description:
    "Explore 3D worlds, solve puzzles, and learn new languages with AI-driven gameplay in Delve!",
};
export const fira_sans = Fira_Sans_Condensed({ subsets: ["latin"], weight:["400","500","700","800"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="mx-auto w-full max-w-[1440px]">
          <Progress_bar />
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
