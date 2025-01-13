import { Box } from "@mui/material";
import React from "react";
import MainMenuGreeting from "./MainMenuGreeting";
import { ContactUs } from "./ContactUs";
export default function MainMenu() {
  return (
    <Box sx={{}}>
      <MainMenuGreeting />
      <ContactUs />
    </Box>
  );
}
