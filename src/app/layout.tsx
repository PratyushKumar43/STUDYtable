import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';

// Using Inter as a reliable alternative to Geist
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "STUDYtable - Your AI Tutor for JEE, NEET, and Boards",
  description: "Your personal AI-Tutor for all academic needs. Whether it's school exams, boards or competitive exams we plan, manage, and help you clear your doubts instantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
