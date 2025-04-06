import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brewed Bytes - Coffee Blog",
  description: "Your daily dose of coffee culture, brewing techniques, and everything in between",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900`}>
        <ThemeProvider>
          <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-sm z-50 border-b border-gray-200 dark:border-gray-800">
            <div className="px-8 mx-auto h-16 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Image
                  src="/bb-logo.png"
                  alt="Brewed Bytes Logo"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Brewed Bytes</h1>
              </Link>
              <ThemeToggle />
            </div>
          </nav>
          <main className="pt-16">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
