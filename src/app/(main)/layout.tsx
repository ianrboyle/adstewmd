import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/react";

import { Box } from "@mui/material";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/NavBar";
import ThemeRegistry from "../ThemeRegistry/ThemeRegistry";

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

export default function MainSiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeRegistry>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <NavBar />
        <Box component="main" sx={{ flex: 1 }}>
          {children}
        </Box>
        <Analytics />
        <Footer />
      </Box>
    </ThemeRegistry>
  );
}
