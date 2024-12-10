import type { Metadata } from "next";
import localFont from "next/font/local";
import "aos/dist/aos.css";
import "./globals.css";
import ClientLayoutEffect from "./components/ClientLayoutEffect";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "FineLine Barber LLC | Best Haircuts & Beard Trims in Midlothian",
  description:
    "FineLine Barber LLC delivers precision haircuts, stylish fades, and expert beard trims in the Midlothian. Walk in today for a fresh, confident look.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayoutEffect />
        {children}
      </body>
    </html>
  );
}
