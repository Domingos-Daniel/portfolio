import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Domingos Manuel Daniel - Frontend Developer",
  description: "Frontend Developer with a passion for building clean, responsive, and user-friendly interfaces using React and TypeScript.",
  keywords: ["frontend developer", "react", "typescript", "next.js", "web development", "luanda", "angola"],
  authors: [{ name: "Domingos Manuel Daniel" }],
  creator: "Domingos Manuel Daniel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://domingos-daniel.vercel.app",
    title: "Domingos Manuel Daniel - Frontend Developer",
    description: "Frontend Developer with a passion for building clean, responsive, and user-friendly interfaces using React and TypeScript.",
    siteName: "Domingos Daniel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Domingos Manuel Daniel - Frontend Developer",
    description: "Frontend Developer with a passion for building clean, responsive, and user-friendly interfaces using React and TypeScript.",
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
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
