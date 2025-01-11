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
        border: "1px solid white",
      }}
    >
      <LogoImage logoColor="white" />
      <Box>
        <IconButton
          color="secondary"
          aria-label="go to facebook"
          sx={{
            color: "white",
          }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          aria-label="go to instagram"
          sx={{
            color: "white",
          }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          aria-label="get directions"
          sx={{
            color: "white",
          }}
        >
          <MapIcon />
        </IconButton>
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
