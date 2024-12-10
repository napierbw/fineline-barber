import localFont from "next/font/local";
import "aos/dist/aos.css";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          property="title"
          content="FineLine Barber LLC | Best Haircuts & Beard Trims in Midlothian"
        />
        <meta
          content="FineLine Barber LLC delivers precision haircuts, stylish fades, and expert beard trims in the Midlothian. Walk in today for a fresh, confident look."
          name="description"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
