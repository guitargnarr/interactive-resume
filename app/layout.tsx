import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matthew David Scott | Technical Project Manager",
  description: "Technical Project Manager | Engineering Lead & Business Analyst - Interactive Resume showcasing 9+ years of experience bridging business needs and technical execution.",
  keywords: "Technical Project Manager, Business Analyst, Full-Stack Developer, Python, React, TypeScript, FastAPI",
  authors: [{ name: "Matthew David Scott" }],
  openGraph: {
    title: "Matthew David Scott | Technical Project Manager",
    description: "Interactive Resume showcasing proven impact in efficiency, quality, and technical leadership.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-gradient-to-br from-slate-50 via-white to-teal-50 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
