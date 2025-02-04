import { Box, Button, Typography } from "@mui/material";
import OverlayComponent from "../Overlay";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function MainMenuGreeting() {
  return (
    <OverlayComponent
      backgroundImage="/background.png"
      altText="background image"
      backgroundColor="rgba(0, 0, 0, 0.6)"
      borderRadius={{ xs: "0 0 0 0", md: "0 0 20rem 0" }}
      minHeight={{
        xs: "500px",
        sm: "700px",
        md: "900px",
        lg: "900px",
      }}
    >
      <>
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 0, sm: 0, md: "20%" },
            left: { xs: 0, sm: 0, md: "10%" },
            p: 2,
            textAlign: "left",
            maxWidth: { xs: "100%", sm: "75%", md: "55%", lg: "50%" },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "",
              fontSize: { xs: "2.5rem", sm: "3.5rem" },
              whiteSpace: "normal",
              overflow: "hidden",
            }}
          >
            FEEL COMFORTABLE IN YOUR OWN SKIN
          </Typography>

          <Button type="submit">
            <CalendarMonthIcon sx={{ marginRight: "0.5rem" }} />
            BOOK AN APPOINTMENT
          </Button>
        </Box>
      </>
    </OverlayComponent>
  );
}
