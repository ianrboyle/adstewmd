import { Box } from "@mui/material";
import React from "react";
import { ContactUs } from "./ContactUs";
import WhatWeDo from "./WhatWeDo";
import FeaturedServices from "./featured-services/FeaturedServices";
import MainMenuGreeting from "./MainMenuGreeting";

export default function MainMenu() {
  return (
    <Box>
      <MainMenuGreeting />
      <WhatWeDo />
      <FeaturedServices />
      <ContactUs />
    </Box>
  );
}
