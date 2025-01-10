import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import background from "../../public/background.png";

export default function BackgroundImage() {
  return (
    <Box
    // sx={{ display: "flex", flexDirection: "column" }}
    >
      <Image
        alt={`background image`}
        src={background}
        style={{
          width: "100%",
          height: "auto",
        }}
        sizes="100vw"
      />
    </Box>
  );
}
