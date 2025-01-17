import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FeaturedServiceCardProps {
  title: string;
  imageSrc: string;
}
export default function FeaturedServiceCard({ title, imageSrc }: FeaturedServiceCardProps) {
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
          <Box sx={{ borderRadius: "0 0 2rem 0", overflow: "hidden", width: "100%", height: "100%" }}>
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
        )}
        <CardContent>
          <Box textAlign="center">
            <Link href={`/${title.toLowerCase().replace(/\s+/g, "-")}`} style={{ textDecoration: "none" }}>
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
