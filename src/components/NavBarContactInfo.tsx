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
          display: { xs: "none", sm: "none", md: "block" },
          ml: "auto",
        }}
      >
        <IconButton
          color="secondary"
          aria-label="go to facebook"
          sx={{
            color: "background.secondary",
          }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          aria-label="go to instagram"
          sx={{
            color: "background.secondary",
          }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          aria-label="get directions"
          sx={{
            color: "background.secondary",
            mr: "1rem",
          }}
        >
          <MapIcon />
        </IconButton>

        <IconButton
          aria-label="Contact"
          sx={{
            color: "background.secondary",
            mr: "1rem",
          }}
        >
          <PlaceIcon /> <Typography>Denver, CO</Typography>
        </IconButton>
        <IconButton
          aria-label="Contact"
          sx={{
            color: "background.secondary",
            mr: "1rem",
          }}
        >
          <PhoneAndroidIcon /> <Typography>303-333-6060</Typography>
        </IconButton>
        <Button
          type="submit"
          sx={{
            backgroundColor: "background.secondary",
            mt: "1rem",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              backgroundImage: "linear-gradient(to bottom, #C086F9, #DFCDF1)",
            },
            marginBottom: "1rem",
          }}
        >
          Patient Portal
        </Button>
      </Box>
    </Box>
  );
}
