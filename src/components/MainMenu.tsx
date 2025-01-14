import { Box } from "@mui/material";
import React from "react";
import MainMenuGreeting from "./MainMenuGreeting";
import { ContactUs } from "./ContactUs";
import WhatWeDo from "./WhatWeDo";
export default function MainMenu() {
  return (
    <Box sx={{}}>
      <MainMenuGreeting />
      <WhatWeDo />
      <ContactUs />
    </Box>
  );
}
