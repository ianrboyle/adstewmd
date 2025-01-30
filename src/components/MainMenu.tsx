import { Box } from "@mui/material";
import React from "react";
import { ContactUs } from "./ContactUs";
import WhatWeDo from "./WhatWeDo";
import MainMenuGreeting from "./MainMenuGreeting";
import OurProviders from "./our-providers/OurProviders";
import FeaturedServices from "./featured-services/FeaturedServices";

export default function MainMenu() {
  return (
    <Box>
      <MainMenuGreeting />
      <WhatWeDo />
      <FeaturedServices />
      <OurProviders />
      <ContactUs />
    </Box>
  );
}
