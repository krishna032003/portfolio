import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Krishna Sahu | Full Stack & AI Engineer",
  description: "Personal portfolio of Krishna Sahu, a Full Stack Developer and AI Engineer specializing in Next.js, AI agents, and scalable web applications.",
  keywords: ["Krishna Sahu", "Full Stack Developer", "AI Engineer", "Next.js Portfolio", "Software Engineer"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <main className="flex-1 pt-[72px]">{children}</main>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
