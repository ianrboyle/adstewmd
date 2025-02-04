import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
interface OverlayComponentProps {
  backgroundImage: string;
  altText: string;
  backgroundColor?: string;
  borderRadius?: { xs?: string; sm?: string; md?: string; lg?: string };
  minHeight?: { xs?: string; sm?: string; md?: string; lg?: string };
  children: React.ReactNode;
}

const OverlayComponent: React.FC<OverlayComponentProps> = ({
  backgroundImage,
  altText,
  children,
  backgroundColor = "rgba(0, 0, 0, 0)",
  borderRadius = { xs: "0", sm: "0", md: "0", lg: "0" },
  minHeight = { xs: "300px", sm: "400px", md: "500px", lg: "600px" },
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        borderRadius: borderRadius,
        mt: "5rem",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <Image
          src={backgroundImage}
          alt={altText}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
          }}
          priority
          sizes="100vw"
          fill={true}
        />
      </Box>

      {/* Overlay Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          backgroundColor: backgroundColor,
          borderRadius: 2,
          padding: 0,
          textAlign: "center",
          width: "100%",
          minHeight,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default OverlayComponent;
