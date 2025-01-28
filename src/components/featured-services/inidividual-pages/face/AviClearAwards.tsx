import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
const awardsImages: { src: string; altText: string }[] = [
  { src: "/featured-services/face/avi-clear/awards/award1.png", altText: "Award 1" },
  { src: "/featured-services/face/avi-clear/awards/award2.png", altText: "Award 2" },
  { src: "/featured-services/face/avi-clear/awards/award3.png", altText: "Award 3" },
  { src: "/featured-services/face/avi-clear/awards/award4.png", altText: "Award 4" },
  { src: "/featured-services/face/avi-clear/awards/award5.png", altText: "Award 5" },
];
export default function AviClearAwards() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: "2rem", md: "1.75rem" },
          fontWeight: "400",
          color: "text.secondary",
          mb: "1rem",
        }}
      >
        Awards
      </Typography>
      <Grid container spacing={2}>
        {awardsImages.map((award, index) => (
          <Grid key={index} size={{ xs: 6, sm: 6, md: 4 }}>
            <Box
              sx={{
                overflow: "hidden",
                width: "100%",
                height: "auto",
              }}
            >
              {/* Image */}
              <Image
                src={award.src}
                alt={award.altText}
                priority={false}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                width={250}
                height={250}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
