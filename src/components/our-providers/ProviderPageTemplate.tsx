import { Box, Divider } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid2";

import FeaturedServicesImageColumn from "../treatments-and-services/individual-page-components/ImageColumn";
import { PageType } from "../../constants/enums";
import ProviderInfo from "./ProviderInfo";

interface ProviderPageProps {
  provider: string;
}
export default function ProviderPageTemplate({ provider }: ProviderPageProps) {
  return (
    <Box
      sx={{
        mt: { xs: "5rem", sm: "7rem", md: "7rem", lg: "9rem", xl: "7rem" },
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          // height: { xs: "125px", sm: "175px", md: "200px", lg: "35vh" },
          height: "35vh",
          overflow: "hidden",
        }}
      >
        <Image
          alt="about us"
          src="/about-us.png"
          fill
          sizes="100vw"
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center 35%",
          }}
        />
      </Box>

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
          <ProviderInfo provider={provider} />
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
