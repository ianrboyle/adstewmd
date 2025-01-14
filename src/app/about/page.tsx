import { Box, Typography } from "@mui/material";

export default function AboutPage() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "0 0 25rem 0",
        height: { xs: "100vh", sm: "100vh", md: "100vh" },
      }}
    >
      <Typography sx={{ marginTop: "20rem" }}>About Us</Typography>
    </Box>
  );
}
