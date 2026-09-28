import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ByteSpace — Discover Your Passion, Build Your Skills",
  description:
    "Unlock your creativity, gain valuable knowledge, and grow with ByteSpace. Explore courses in design, technology, business, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
