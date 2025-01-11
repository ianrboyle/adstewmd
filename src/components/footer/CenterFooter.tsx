import { Box, Button, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
export default function CenterFooter() {
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
      <Typography
        sx={{
          color: "white",
        }}
      >
        Contact Us
      </Typography>
      <Divider
        variant="middle"
        flexItem
        sx={{
          backgroundColor: "white",
          width: "75%",
          margin: "0 auto",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
        aria-hidden="true"
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Grid container spacing={2} alignItems="center">
          {/* Left Box - 40% */}
          <Grid size={{ xs: 5, md: 5, lg: 5 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                marginLeft: "1rem",
              }}
            >
              <Typography sx={{ color: "white", textAlign: "left" }}>Location:</Typography>
              <Typography sx={{ color: "white", textAlign: "left" }}>3300 E 1st Ave #400 Denver, CO 80206</Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 7, md: 7, lg: 7 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ color: "white" }}>303-333-6060</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Divider
        variant="middle"
        flexItem
        sx={{
          backgroundColor: "white",
          width: "75%",
          margin: "0 auto",
          marginTop: "1rem",
        }}
        aria-hidden="true"
      />
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
        <CalendarMonthIcon sx={{ marginRight: "0.5rem" }} />
        BOOK AN APPOINTMENT
      </Button>
    </Box>
  );
}
