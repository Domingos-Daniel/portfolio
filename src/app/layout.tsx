import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import I18nProvider from "@/components/I18nProvider";
import LanguageSwitch from "@/components/LanguageSwitch";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Domingos Manuel Daniel - Full Stack Developer",
  description: "Full Stack Developer with 5+ years of experience building robust web applications with React, TypeScript, Next.js, Laravel, and Node.js.",
  keywords: ["full stack developer", "react", "typescript", "next.js", "laravel", "node.js", "web development", "luanda", "angola"],
  authors: [{ name: "Domingos Manuel Daniel" }],
  creator: "Domingos Manuel Daniel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://domingos-daniel.vercel.app",
    title: "Domingos Manuel Daniel - Full Stack Developer",
    description: "Full Stack Developer with 5+ years of experience building robust web applications with React, TypeScript, Next.js, Laravel, and Node.js.",
    siteName: "Domingos Daniel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Domingos Manuel Daniel - Full Stack Developer",
    description: "Full Stack Developer with 5+ years of experience building robust web applications with React, TypeScript, Next.js, Laravel, and Node.js.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-gray-900 text-white antialiased`}>
        <I18nProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <LanguageSwitch />
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
