import { Box, Typography } from "@mui/material";
import ProviderImages from "./ProviderImages";

export default function OurProviders() {
  return (
    <Box
      sx={{
        marginTop: "5rem",
      }}
    >
      <Box
        sx={{
          textAlign: { xs: "center", sm: "center", md: "left" },
          ml: { xs: "0rem", sm: "0rem", md: "8rem", lg: "2rem", xl: "10rem" },
          width: { xs: "100%", sm: "100%", md: "65%", lg: "50%", xl: "40%" },
          mb: "2rem",
        }}
      >
        <Typography variant="h1" sx={{ fontSize: { xs: "3rem", sm: "3rem", md: "4.5rem" }, color: "#301b40" }}>
          Meet Our Highly Trained Providers
        </Typography>
      </Box>
      <ProviderImages />
    </Box>
  );
}
