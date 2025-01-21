import { Box, Divider, Link, Typography } from "@mui/material";
import FeaturedServiceBackgroundImage from "../../../components/featured-services/BackgroundImage";
import Grid from "@mui/material/Grid2";
import FeaturedServiceDescription from "../../../components/featured-services/Description";
import FeaturedServiceDescriptionPageHeading from "../../../components/featured-services/DescriptionPageHeading";
import FeaturedServiceDescriptionWithList from "../../../components/featured-services/DescriptionWithList";
import FillerTypes from "../../../components/featured-services/FillerTypes";
import DividerWithContactButtons from "../../../components/featured-services/DividerWithContactButtons";
import {
  pageHeadingTitle,
  pageHeadingSubtitle,
  fillersServicesTitle,
  fillersServices,
  whatAreFillersTitle,
  whatAreFillersText,
  fillerResultsTitle,
  fillerResultsBody,
  fillersListMainText,
  fillersListSubText,
  whatFillersCanDo,
  resultsLastTitle,
  resultsLastBody,
  howFillersFeelTitle,
  howFillersFeelBody,
} from "../../../constants/featured-services";
import Image from "next/image";
import FeaturedServicesImageWithAnimation from "../../../components/featured-services/ImageWithAnimation";
import FeaturedServicesImageColumn from "../../../components/featured-services/ImageColumn";
import { FeaturedServicesPages } from "../../../constants/enums";
import FillersFeaturedServicePage from "../../../components/featured-services/inidividual-pages/FillersPage";

export default function Fillers() {
  return (
    <Box
      sx={{
        mt: { xs: "5rem", sm: "7rem", md: "7rem", lg: "9rem", xl: "7rem" },
        backgroundColor: "white",
      }}
    >
      <FeaturedServiceBackgroundImage imageSrc="/featured-services/botox-long.png" altText="botox" />
      <FillersFeaturedServicePage />
    </Box>
  );
}
