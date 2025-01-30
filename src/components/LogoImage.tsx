import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import AsdLogoPurple from "../../public/ASD_Logo.png";
import AsdLogoWhite from "../../public/ASD_white.png";
import Link from "next/link";

interface LogoImageProps {
  logoColor: "purple" | "white";
}
export default function LogoImage({ logoColor }: LogoImageProps) {
  const logo = logoColor == "purple" ? AsdLogoPurple : AsdLogoWhite;
  return (
    <Box
      sx={{
        width: logoColor === "white" ? "90%" : { xs: "70%", sm: "60%", md: "40%", lg: "30%", xl: "20%" },
        mt: "1rem",
      }}
    >
      <Link href="/">
        <Image
          alt="Logo"
          src={logo}
          style={{
            width: "100%",
            height: "auto",
          }}
          width={200}
          height={100}
          priority
        />
      </Link>
    </Box>
  );
}
