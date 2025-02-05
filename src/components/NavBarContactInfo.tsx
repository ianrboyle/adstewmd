import { Box, Button, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MapIcon from "@mui/icons-material/Map";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

export default function NavBarContactInfo() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "none", lg: "block" },
          ml: "auto",
        }}
      >
        <IconButton color="secondary" aria-label="go to facebook" sx={{}}>
          <FacebookIcon />
        </IconButton>
        <IconButton aria-label="go to instagram" sx={{}}>
          <InstagramIcon />
        </IconButton>
        <IconButton
          aria-label="get directions"
          sx={{
            mr: "1rem",
            mt: "0rem",
          }}
        >
          <MapIcon />
        </IconButton>

        <IconButton
          aria-label="Contact"
          sx={{
            mr: "1rem",
          }}
        >
          <PlaceIcon /> <Typography>Denver, CO</Typography>
        </IconButton>
        <IconButton
          aria-label="Contact"
          sx={{
            mr: "1rem",
          }}
        >
          <PhoneAndroidIcon />
          <Typography component="a" href="tel:3033336060" sx={{ textDecoration: "none", color: "text.secondary" }}>
            303-333-6060
          </Typography>
        </IconButton>
        <Button type="submit" sx={{}}>
          Patient Portal
        </Button>
      </Box>
    </Box>
  );
}
