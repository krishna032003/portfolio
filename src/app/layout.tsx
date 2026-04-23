import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";

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


import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Preloader } from "@/components/ui/Preloader";
import { TerminalOverlay } from "@/components/ui/TerminalOverlay";
import { Navigation } from "@/components/ui/Navigation";
import { NeuralBackground } from "@/components/ui/NeuralBackground";
import { VoiceAssistant } from "@/components/ui/VoiceAssistant";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-500">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Preloader />
          <NeuralBackground />
          <div className="noise" />
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <TerminalOverlay />
          <VoiceAssistant />
          <Navigation />
          <main className="flex-1 pt-[72px]">{children}</main>
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
