import type { Metadata } from "next";

import "./globals.css";
import { Footer, Navbar } from ".";
import ReduxProvider from "@/redux/provider";
export const metadata: Metadata = {
  title: "Pizza Hub",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Navbar />
          <main className="min-h-[calc(100vh-126px)] padding-container">
            {children}
          </main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
