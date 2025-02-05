import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid2";
import FeaturedServicesImageColumn from "../treatments-and-services/individual-page-components/ImageColumn";
import { PageType } from "../../constants/enums";
import { providerImageData } from "../../constants/our-providers/image-data";
import ProviderImageCard from "./ProviderImageCard";
export default function OurProviders() {
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
            objectPosition: "center 50%",
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
          <Box
            sx={{
              width: { lg: "100%", xl: "90%" },
              p: { xs: 2, sm: 2, md: 4, xl: 0 },
            }}
          >
            <Box sx={{ p: 2 }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  fontWeight: "500",
                  color: "text.secondary",
                  mb: "1rem",
                }}
              >
                Providers
              </Typography>

              <Grid container spacing={2}>
                {providerImageData.map((provider, index) => (
                  <Grid key={index} size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
                    <ProviderImageCard image={provider} />
                  </Grid>
                ))}
              </Grid>
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
