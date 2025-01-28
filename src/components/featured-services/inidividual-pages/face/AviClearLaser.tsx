import { Box, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FeaturedServiceBackgroundImage from "../individual-page-components/BackgroundImage";
import FeaturedServicesImageColumn from "../individual-page-components/ImageColumn";
import { PageType } from "../../../../constants/enums";
import DividerWithContactButtons from "../individual-page-components/DividerWithContactButtons";
import FeaturedServiceDescriptionPageHeading from "../individual-page-components/DescriptionPageHeading";

import AviClearImage from "./AviClearImage";
import AviClearAwards from "./AviClearAwards";
const aviClearMainTitle = "AviClear Laser";
const aviClearMainBody = [
  "Reimagining how acne is treated.AviClear is the first and original FDA-cleared energy device for thereatment of mild, moderate, and serve acne. 4 Engineered with a revolutionary 1726 nm wavelength for allskin types, it selectively targets and suppresses the sebaceous glands, eliminating acne at the sourcewithout the need for prescription medications.",
  "Significantly eliminates acne in three, quick 30-minute treatment sessions without downtime. AviClear is equipped with exclusive AviCool™ sapphire skin cooling and smart sensors to maximize patient comfort and safety and maintain skin’s temperature during treatment.",
];

const aviClearImages: { src: string; altText: string }[] = [
  { src: "/featured-services/face/avi-clear/avi-clear1.png", altText: "AviClear" },
  { src: "/featured-services/face/avi-clear/avi-clear2.png", altText: "AviClear" },
  { src: "/featured-services/face/avi-clear/avi-clear3.png", altText: "AviClear" },
  { src: "/featured-services/face/avi-clear/avi-clear4.png", altText: "AviClear" },
];

export default function AviClearLaser() {
  return (
    <Box
      sx={{
        mt: { xs: "5rem", sm: "7rem", md: "7rem", lg: "9rem", xl: "7rem" },
        backgroundColor: "white",
      }}
    >
      <FeaturedServiceBackgroundImage
        imageSrc="/featured-services/face/chemical-peel.png"
        altText="fraxel"
        objectPosition="center 40%"
      />
      <Grid
        container
        spacing={4}
        sx={{
          justifyContent: "center",
          display: "flex",
          margin: "0 auto",
        }}
      >
        <Grid
          size={{ md: 12, lg: 8 }}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: { lg: "100%", xl: "90%" },
              p: { xs: 2, sm: 2, md: 4, xl: 0 },
            }}
          >
            <Box>
              <FeaturedServiceDescriptionPageHeading title={aviClearMainTitle} body={aviClearMainBody} />
              <DividerWithContactButtons />
              {aviClearImages.map((image, index) => (
                <AviClearImage key={index} src={image.src} altText={image.altText} />
              ))}
              <AviClearAwards />
            </Box>
          </Box>
        </Grid>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ mr: "-1px", display: { xs: "none", lg: "block" } }}
        />
        <Grid
          size={{ md: 12, lg: 3 }}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FeaturedServicesImageColumn currentPage={PageType.genericPage} />
        </Grid>
      </Grid>
    </Box>
  );
}
