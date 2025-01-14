import React from "react";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import background from "../../public/background.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function MainMenuGreeting() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "0 0 25rem 0",
        height: { xs: "100vh", sm: "100vh", md: "100vh" },
      }}
    >
      <Image
        alt="background image"
        priority={false}
        src={background}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top",
        }}
        sizes="100vw"
      />
      <Box
        sx={{
          position: "absolute",
          top: { xs: "65%", md: "75%" },
          height: { xs: "75%", sm: "50%" },
          left: { xs: "50%", md: "35%", lg: "55%" },
          transform: "translate(-50%, -50%)",
          px: 2,
          width: "100%",
          maxWidth: { xs: "100%", md: "65%", lg: "100%" },
        }}
      >
        <Typography
          sx={{
            color: "",
            fontSize: { xs: "3rem", md: "3rem" },
            whiteSpace: { xs: "normal", sm: "normal", md: "normal", lg: "nowrap" },
            overflow: "hidden",
          }}
        >
          FEEL COMFORTABLE IN YOUR OWN SKIN
        </Typography>

        <Button type="submit">
          <CalendarMonthIcon sx={{ marginRight: "0.5rem" }} />
          BOOK AN APPOINTMENT
        </Button>
      </Box>
    </Box>
  );
}
