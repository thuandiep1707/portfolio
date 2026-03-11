import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
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
  title: "Thuần Diệp Corp.",
  description: "Team freelancer Thuần Diệp chuyên cung cấp các giải pháp công nghệ và thiết kế sáng tạo.",
  keywords: ["Ngọ", "Ngọ Văn", "Văn Long", "Long", "Thuần Diệp", "thuandiep", "thuandiep corp.","Thuần Diệp Corp", "Ngọ Văn Long", "Freelancer Team", "Thiết kế 3D", "Lập trình chuyên nghiệp"],
  authors: [{ name: "Ngọ Văn Long" }],
  creator: "Ngọ Văn Long",
  publisher: "Thuần Diệp Corp",
  openGraph: {
    title: "Thuần Diệp Corp - Giải pháp Freelancer chuyên nghiệp",
    description: "Team freelancer Thuần Diệp chuyên cung cấp các giải pháp công nghệ và thiết kế sáng tạo.",
    url: "https://thuandiep.dev",
    siteName: "Thuần Diệp Corp",
    images: [
      {
        url: "https://thuandiep.dev/logo-thuandiep.png", 
        width: 400,
        height: 400,
        alt: "Thuần Diệp Corp Logo",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thuần Diệp Corp",
    description: "Team freelancer Thuần Diệp chuyên cung cấp các giải pháp công nghệ và thiết kế sáng tạo.",
    creator: "@ngovanlong",
    images: ["https://thuandiep.dev/logo-thuandiep.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-545E8WEEV7" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className=""></header>
        <main className="">
          {children}
        </main>
        <footer className=""></footer>
      </body>
    </html>
  );
}
