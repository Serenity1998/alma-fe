import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/assets/styles/globals.scss";
import StoreProvider from "@/store/Provider";
import ProtectedComponent from "@/components/common/ProtectedComponent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Internal Lead Manager",
  description: "Dashboard for Alma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StoreProvider>
          <ProtectedComponent>
            {children}
          </ProtectedComponent>
        </StoreProvider>
      </body>
    </html>
  );
}
