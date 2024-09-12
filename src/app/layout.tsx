import type { Metadata } from "next";
import "./globals.css";

import ThemeRegistry from "./providers/ThemeRegistry/ThemeRegistry";
import NavBar from "../components/NavBar";
import { Box } from "@mui/material";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
          {/* <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: "background.default",
              mt: ["68px", "68px", "104px"],
            }}
          > */}
          {children}
          {/* </Box> */}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
