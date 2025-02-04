import { Box } from "@mui/material";
import React from "react";
import { ContactUsHomePage } from "./ContactUsHomePage";
import WhatWeDo from "./WhatWeDo";
import OurProvidersHomePage from "./our-providers/OurProvidersHomePage";
import FeaturedServices from "./featured-services-home-page/FeaturedServices";
import MainMenuGreeting from "./MainMenuGreeting";
import WhyChooseUsHomePage from "./WhyChooseUsHomePage";

export default function MainMenu() {
  return (
    <Box>
      <MainMenuGreeting />
      <WhatWeDo />
      <FeaturedServices />
      <OurProvidersHomePage />
      <WhyChooseUsHomePage />
      <ContactUsHomePage />
    </Box>
  );
}
