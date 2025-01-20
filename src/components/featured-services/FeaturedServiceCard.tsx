import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FeaturedServiceCardProps {
  title: string;
  imageSrc: string;
  link: string;
}
export default function FeaturedServiceCard({ title, imageSrc, link }: FeaturedServiceCardProps) {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 300,
        minHeight: { xs: 240, sm: 400, lg: 400 },
        backgroundColor: "transparent",
      }}
      elevation={0}
    >
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" sx={{ height: "100%" }}>
        {imageSrc && (
          <Link href={`/services/${link}`} style={{ display: "flex", width: "fit-content" }}>
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
                src={imageSrc}
                alt={title}
                priority={false}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
                width={400}
                height={400}
              />
            </Box>
          </Link>
        )}
        <CardContent>
          <Box textAlign="center">
            <Link href={`/services/{${link}}`} style={{ textDecoration: "none" }}>
              <Typography
                variant="h3"
                sx={{
                  color: "white",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {title}
              </Typography>
            </Link>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
