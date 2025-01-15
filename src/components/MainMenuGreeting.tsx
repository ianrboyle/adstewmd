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
        borderRadius: { xs: "0rem", md: "0 0 20rem 0" },
        height: { xs: "55vh", sm: "55vh", md: "100vh" },
        marginTop: { xs: "5rem", sm: "7.5rem" },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0, // Keeps the overlay behind the content
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: {
              xs: "rgba(0, 0, 0, 0.6)", // Dark overlay for small screens
              md: "rgba(0, 0, 0, 0.2)",
              lg: "transparent",
            },
            zIndex: 1,
          },
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
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "60%", sm: "75%" },
          height: { xs: "75%", sm: "50%" },
          left: { xs: "50%", sm: "50%", md: "35%" },
          transform: "translate(-50%, -50%)",
          px: 2,
          width: "100%",
          maxWidth: { xs: "100%", sm: "75%", md: "55%", lg: "50%" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "",
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            whiteSpace: "normal",
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
