import { Box, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
export default function CenterFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "30vh",
        // border: "1px solid white",
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
          width: "90%",
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
        <Grid container spacing={0} alignItems="center">
          {/* Left Box - 40% */}
          <Grid size={{ xs: 6, md: 6, lg: 6 }}>
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
          <Grid size={{ xs: 6, md: 6, lg: 6 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography component="a" href="tel:3033336060" sx={{ color: "white", textDecoration: "none" }}>
                303-333-6060
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Divider
        variant="middle"
        flexItem
        sx={{
          backgroundColor: "white",
          width: "90%",
          margin: "0 auto",
          marginTop: "1rem",
        }}
        aria-hidden="true"
      />
      {/* <Button type="submit" sx={{}}>
        <CalendarMonthIcon sx={{ marginRight: "0.5rem" }} />
        BOOK AN APPOINTMENT
      </Button> */}
    </Box>
  );
}
