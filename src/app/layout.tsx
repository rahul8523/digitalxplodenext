import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Outfit font import kiya
import "./globals.css";
import Header from "@/components/coomon/Header";
import Footer from "@/components/coomon/Footer";

// Font configurations
const outfit = Outfit({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"], 
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Digital Xplode | Elevate your Brand",
  description: "Best Digital Marketing Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-black text-white antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}