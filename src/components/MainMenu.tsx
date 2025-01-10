import { Box } from "@mui/material";
import React from "react";
import BackgroundImage from "./BackgroundImage";
import { ContactUs } from "./ContactUs";
import FeaturedServices from "./FeaturedServices";

export default function MainMenu() {
  return (
    <Box>
      <BackgroundImage />
      <FeaturedServices />
      <ContactUs />
    </Box>
  );
}
