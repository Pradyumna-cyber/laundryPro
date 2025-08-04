
import type { Metadata } from "next";
import  "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css";

export const metadata: Metadata = {
  title: "Laundry Pro",
  description: "Laundry Pro - Your Smart Laundry Solution",
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {
  return (
    <html 
    className="hydrated"
    lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
