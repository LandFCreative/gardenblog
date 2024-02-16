import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./layout/Header"
import Footer from "./layout/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clever Gardner Blog",
  description: "Gardening for Northern's (Zone 6 or less)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
      <main>
        {children}
        </main>
        <Footer />
        </body>
    </html>
  );
}
