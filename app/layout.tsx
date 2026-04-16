import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { mockProfile } from "@/data/mock-profile";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

const title = `${mockProfile.name} — AMA 봇`;
const description =
  "KAVA 12기 신종목이 제작한 AMA 봇. AI 코딩 에이전트(Cursor, Codex, Claude Code)와 함께 바이브코딩 했습니다.";
const ogImage = "https://kava-ama.vercel.app/og.png";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://kava-ama.vercel.app"),
  openGraph: {
    title,
    description,
    url: "https://kava-ama.vercel.app",
    siteName: "신종목 AMA 봇",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "신종목 AMA 봇" }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={geist.variable}>
      <body className="bg-zinc-950 text-zinc-100 font-sans antialiased h-dvh flex flex-col overflow-hidden">
        <main className="max-w-[720px] mx-auto w-full flex-1 flex flex-col min-h-0">{children}</main>
      </body>
    </html>
  );
}
