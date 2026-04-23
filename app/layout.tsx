import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Growth Central Events",
  description: "Creating Similar Interest and Business Networking Events",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
