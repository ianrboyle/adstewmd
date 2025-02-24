import type { Metadata } from "next";
import "./globals.css";

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
  other: {
    "google-site-verification": "rOnGfOZXxQodrY6X5jxFrdt2RxlTMDqsqWRMKKdvEQU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
