
import type { Metadata } from "next";
import  "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css";
import HydrationHandler from "./components/HydrationHandler";

export const metadata: Metadata = {
  title: "Laundry Pro",
  description: "Laundry Pro - Your Smart Laundry Solution",
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <HydrationHandler />
        {children}
      </body>
    </html>
  );
}
