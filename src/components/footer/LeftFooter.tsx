import { Box, IconButton, Typography } from "@mui/material";
import LogoImage from "../LogoImage";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MapIcon from "@mui/icons-material/Map";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
export default function LeftFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "30vh",
      }}
    >
      <LogoImage logoColor="white" />
      <Box>
        <a href="https://www.facebook.com/ASDCherryCreek" target="_blank" rel="noopener noreferrer">
          <IconButton
            aria-label="go to facebook"
            sx={{
              color: "white",
            }}
          >
            <FacebookIcon />
          </IconButton>
        </a>
        <a href="https://www.instagram.com/adriennestewartmd" target="_blank" rel="noopener noreferrer">
          <IconButton
            aria-label="go to instagram"
            sx={{
              color: "white",
            }}
          >
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
              color: "white",
            }}
          >
            <MapIcon />
          </IconButton>
        </a>
      </Box>
      <Box>
        <IconButton
          aria-label="hours of operation"
          sx={{
            color: "white",
          }}
        >
          <AccessTimeIcon />
          <Typography
            sx={{
              color: "white",
              paddingLeft: "5px",
            }}
          >
            Monday to Friday: 830am - 5:00pm
          </Typography>
        </IconButton>
      </Box>
    </Box>
  );
}
