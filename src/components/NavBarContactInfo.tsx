import { Box, Button, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MapIcon from "@mui/icons-material/Map";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Link from "next/link";

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
        <a href="https://www.facebook.com/ASDCherryCreek" target="_blank" rel="noopener noreferrer">
          <IconButton color="secondary" aria-label="go to facebook" sx={{}}>
            <FacebookIcon />
          </IconButton>
        </a>
        <a href="https://www.instagram.com/adriennestewartmd" target="_blank" rel="noopener noreferrer">
          <IconButton aria-label="go to instagram" sx={{}}>
            <InstagramIcon />
          </IconButton>
        </a>
        <a
          href="https://www.google.com/maps/place/Aesthetic+Surgery+and+Dermatology+of+Cherry+Creek:+The+Office+of+Adrienne+Stewart,+MD/@39.7175786,-104.9481433,15z/data=!4m6!3m5!1s0x876c7e9507731e15:0x4940252569d5fb77!8m2!3d39.7175786!4d-104.9481433!16s%2Fg%2F1hc7zdp7z?sa=X&ved=1t:2428&ictx=111&coh=219816&entry=tts&g_ep=EgoyMDI0MDgwNS4wKgBIAVAD"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton
            aria-label="get directions"
            sx={{
              mr: "1rem",
              mt: "0rem",
            }}
          >
            <MapIcon />
          </IconButton>
        </a>
        <Link href="/contact">
          <IconButton
            aria-label="Contact"
            sx={{
              mr: "1rem",
            }}
          >
            <PlaceIcon /> <Typography>Denver, CO</Typography>
          </IconButton>
        </Link>

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
        <a href="https://asd.ema.md/ema/Login.action" target="_blank" rel="noopener noreferrer">
          <Button type="submit">Patient Portal</Button>
        </a>
      </Box>
    </Box>
  );
}
