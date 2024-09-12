import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import AppIcon from "../../public/AppIcon.png";

export default function LogoImage() {
  return (
    <Box
    // sx={{ display: "flex", flexDirection: "column" }}
    >
      <Image
        alt={`logo`}
        src={AppIcon}
        style={{
          width: "100%",
          height: "auto",
        }}
        sizes="100vw"
      />
    </Box>
  );
}
