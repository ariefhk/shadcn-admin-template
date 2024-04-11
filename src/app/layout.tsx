import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import ThemeProvider from "@/components/provider/theme-provider";
import NPProgresProvider from "@/components/provider/np-progress-provider";
import ReactQueryProvider from "@/components/provider/react-query-provider";
import { Toaster } from "@/components/ui/toaster";
import NextAuthProvider from "@/components/provider/next-auth-provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <NPProgresProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <ReactQueryProvider>
              <NextAuthProvider>{children}</NextAuthProvider>
            </ReactQueryProvider>
          </ThemeProvider>
        </NPProgresProvider>
        <Toaster />
      </body>
    </html>
  );
}
