import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
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
        maxWidth: 380,
        minHeight: { xs: 240, sm: 261, lg: 261 },
      }}
    >
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" p={2}>
        {imageSrc && (
          <CardMedia
            component="img"
            alt={title}
            height="300"
            image={imageSrc}
            sx={{ borderRadius: "4px", objectFit: "cover", width: "100%" }}
          />
        )}
        <CardContent>
          <Box textAlign="center">
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
