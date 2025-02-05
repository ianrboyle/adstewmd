import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid2";
import { IProviderInfo } from "../../interfaces/provider-info";
import { notFound } from "next/navigation";
interface ProviderInfoProps {
  providerInfo: IProviderInfo;
}

export default async function ProviderInfo({ providerInfo }: ProviderInfoProps) {
  if (!providerInfo) return notFound();
  return (
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
          {providerInfo.title}
        </Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 6 }}>
            <Box
              sx={{
                height: { xs: "100%", sm: "100%", md: "100%", lg: "75%" },
                width: { xs: "100%", sm: "100%", md: "100%", lg: "75%" },
              }}
            >
              <Image
                src={providerInfo.image.src}
                alt={providerInfo.image.altText}
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
            {providerInfo.textNextToImage.map((text, index) => (
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

        {providerInfo.textBody.map((text, index) => (
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
  );
}
