import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid2";

import FeaturedServicesImageColumn from "../treatments-and-services/individual-page-components/ImageColumn";
import { PageType } from "../../constants/enums";
import { CardImageProps } from "../../interfaces/card-image-props";

interface ProviderPageProps {
  image: CardImageProps;
  textNextToImage: string[];
  textBody: string[];
  title: string;
}
export default function ProviderPageTemplate({ image, textNextToImage, textBody, title }: ProviderPageProps) {
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
                {title}
              </Typography>
              <Grid container>
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 6 }}>
                  <Box
                    sx={{
                      height: { xs: "100%", sm: "100%", md: "100%", lg: "75%" },
                      width: { xs: "100%", sm: "100%", md: "100%", lg: "75%" },
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.altText}
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                      height={300}
                      width={200}
                      priority
                    />
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 8, lg: 6 }}>
                  {textNextToImage.map((text, index) => (
                    <Typography
                      key={index}
                      variant="body1"
                      sx={{
                        color: "black",
                        whiteSpace: "normal",
                        overflow: "hidden",
                        mb: "1rem",
                      }}
                    >
                      {text}
                    </Typography>
                  ))}
                </Grid>
              </Grid>

              {textBody.map((text, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  sx={{
                    color: "black",
                    whiteSpace: "normal",
                    overflow: "hidden",
                    mb: "1rem",
                  }}
                >
                  {text}
                </Typography>
              ))}
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
