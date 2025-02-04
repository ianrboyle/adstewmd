import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CardImageProps } from "../../../interfaces/card-image-props";

interface FeaturedServiceCardProps {
  imageProps: CardImageProps;
  textColor: string;
}
export default function FeaturedServiceCard({ imageProps, textColor }: FeaturedServiceCardProps) {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 400,
        minHeight: { xs: 240, sm: 400, lg: 400 },
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
      }}
      elevation={0}
    >
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" sx={{ height: "100%" }}>
        <Link href={`/services/${imageProps.link}`} style={{ display: "flex", width: "100%" }}>
          <Box
            sx={{
              borderRadius: "0 0 2rem 0",
              overflow: "hidden",
              width: "100%",
              height: "100%",
              cursor: "pointer",
              position: "relative",

              "&:hover::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 1,
              },
              "&:hover": {
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
              },
            }}
          >
            <Image
              src={imageProps.src}
              alt={imageProps.altText}
              priority={false}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
              width={400}
              height={400}
            />
          </Box>
        </Link>

        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Link href={`/services/{${imageProps.link}}`} style={{ textDecoration: "none" }} passHref>
              <Typography
                variant="h3"
                sx={{
                  color: textColor,
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {imageProps.title}
              </Typography>
              {imageProps.text && (
                <Box sx={{ minHeight: { md: "5rem", lg: "10rem" }, display: "flex", flexDirection: "column" }}>
                  <Typography variant="body2" sx={{ color: textColor, fontSize: "1.5rem" }}>
                    {imageProps.text}
                  </Typography>
                </Box>
              )}
            </Link>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
