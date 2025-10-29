import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gaming Gully VR at Comic-Con Hyderabad 2025 | Booth A29",
  description: "Visit Gaming Gully VR at Comic-Con Hyderabad 2025! Experience cutting-edge VR gaming at Booth A29, HITEX. Oct 31-Nov 2. Demos, battles, adventures & prizes!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
