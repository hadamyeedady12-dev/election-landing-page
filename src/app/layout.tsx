import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "임성은 - 경상남도 방사선사 협회 회장 후보",
  description: "경상남도 방사선사 협회 회장 선거 후보 임성은입니다. 방사선사들의 권익 향상과 전문성 강화를 위해 최선을 다하겠습니다.",
  keywords: [
    "임성은",
    "경상남도회",
    "방사선사협회",
    "회장 선거",
    "경상남도 방사선사",
    "방사선사 협회",
    "의료 방사선",
    "방사선 기사"
  ],
  authors: [{ name: "임성은" }],
  creator: "임성은",
  publisher: "임성은 선거 캠프",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://임성은.com",
    siteName: "임성은 - 경상남도 방사선사 협회 회장 후보",
    title: "임성은 - 경상남도 방사선사 협회 회장 후보",
    description: "경상남도 방사선사 협회 회장 선거 후보 임성은입니다. 방사선사들의 권익 향상과 전문성 강화를 위해 최선을 다하겠습니다.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "임성은 - 경상남도 방사선사 협회 회장 후보"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "임성은 - 경상남도 방사선사 협회 회장 후보",
    description: "경상남도 방사선사 협회 회장 선거 후보 임성은입니다. 방사선사들의 권익 향상과 전문성 강화를 위해 최선을 다하겠습니다.",
    images: ["/twitter-image.jpg"],
    creator: "@임성은"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "google-site-verification-code",
    other: {
      naver: "naver-site-verification-code"
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
