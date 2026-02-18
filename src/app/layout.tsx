import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gelead | Portfolio",
  description: "A modern, full‑stack Next.js portfolio for Gelead.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /* suppressHydrationWarning is required for next-themes to prevent console errors */
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          font-sans antialiased 
          /* The following classes enable the Theme Toggle to work globally */
          bg-white text-black 
          dark:bg-black dark:text-white 
          /* Smooth color transition when toggling */
          transition-colors duration-300
        `}
      >
        <ThemeProvider>
          {/* Navigation stays at the top */}
          <Navbar />
          
          {/* Progress bar container */}
          

          {/* Main content area. 
              Note: Ensure your page-level containers don't have hardcoded 'bg-black' 
              or they will override this theme logic.
          */}
          <main className="min-h-screen">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}