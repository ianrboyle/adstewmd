import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import ThemeRegistry from "./providers/ThemeRegistry/ThemeRegistry";
import NavBar from "../components/NavBar";
import Footer from "../components/footer/Footer";

export const metadata: Metadata = {
  title: {
    default: "Aesthetic Surgery & Dermatology of Cherry Creek",
    template: "%s - Aesthetic Surgery & Dermatology",
  },
  description:
    "Aesthetic Surgery and Dermatology of Cherry Creek is a cutting-edge aesthetic dermatology practice in Denver, Colorado, founded by board-certified dermatologist Adrienne Stewart, MD, and medical aesthetician Willa Roberts.",
  openGraph: {
    title: "Aesthetic Surgery & Dermatology of Cherry Creek",
    description:
      "Aesthetic Surgery and Dermatology of Cherry Creek is a cutting-edge aesthetic dermatology practice in Denver, Colorado, founded by board-certified dermatologist Adrienne Stewart, MD, and medical aesthetician Willa Roberts.",
    url: "https://adstewmd.vercel.app",
    images: "/opengraph-image.png",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <NavBar />

          {children}
          <Analytics />
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
