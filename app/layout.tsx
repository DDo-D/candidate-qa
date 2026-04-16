import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { mockProfile } from "@/data/mock-profile";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

// ✏️ 본인 Vercel 도메인으로 수정하세요
const SITE_URL = "https://your-ama.vercel.app";

const title = `${mockProfile.name} — AMA 봇`;
const description = `KAVA 12기 ${mockProfile.name}이 제작한 AMA 봇. AI 코딩 에이전트와 함께 바이브코딩 했습니다.`;
const ogImage = `${SITE_URL}/og.png`;

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: `${mockProfile.name} AMA 봇`,
    images: [{ url: ogImage, width: 1200, height: 630, alt: `${mockProfile.name} AMA 봇` }],
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
