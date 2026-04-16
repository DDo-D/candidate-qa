import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import DisclosureBanner from "@/components/DisclosureBanner";
import { mockProfile } from "@/data/mock-profile";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: `${mockProfile.name} — 후보자 Q&A`,
  description: "후보자 정보 확인 인터페이스 (후보자 제공 자료 기반)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={geist.variable}>
      <body className="bg-white text-zinc-900 font-sans antialiased h-dvh flex flex-col overflow-hidden">
        <DisclosureBanner lastUpdated={mockProfile.lastUpdated} />
        <main className="max-w-[720px] mx-auto w-full flex-1 flex flex-col min-h-0">{children}</main>
      </body>
    </html>
  );
}
