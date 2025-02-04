"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import { IProviderInfo } from "../../interfaces/provider-info";
interface ProviderInfoProps {
  provider: string;
}

export default function ProviderInfo({ provider }: ProviderInfoProps) {
  const [providerInfo, setProviderInfo] = useState<IProviderInfo | null>(null);

  useEffect(() => {
    async function fetchProviderInfo() {
      try {
        const providerModule = await import(`../../constants/our-providers/${provider}`);
        setProviderInfo(providerModule.default);
      } catch (error) {
        console.error("Provider not found:", error);
      }
    }

    fetchProviderInfo();
  }, [provider]);
  if (!providerInfo) {
    return <Typography>Loading Provider Info</Typography>;
  }
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
        <Grid container>
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
