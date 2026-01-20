import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gaming Gully VR | India's Premier Event-Based VR Company",
  description: "Gaming Gully VR brings immersive virtual reality experiences to events, exhibitions, and venues across India. Experience cutting-edge VR gaming with friends and family.",
  icons: {
    icon: '/images/gaming_gully_bw.png',
  },
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
