import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const juvedermFillers = ["Vollure XC", "Volbella XC", "Ultra XC", "Ultra Plus XC", "Volux, Voluma"];
const restylaneFillers = ["Lyft", "Defyne", "Refyne", "Kysse", "Contour"];
const rhaFillers = ["Redensity, 2, 3, 4", "Versa", "Radiesse+"];
export default function FillerTypes() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography
        variant="body1"
        sx={{
          color: "black",
          mb: "1rem",
        }}
      >
        Call Aesthetic Surgery and Dermatology of Cherry Creek or schedule a consultation online for fillers today.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "black",
          mb: "1rem",
        }}
      >
        We offer the following fillers:
      </Typography>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Typography
            variant="body1"
            sx={{
              color: "black",
              mb: "1rem",
              textDecoration: "underline",
            }}
          >
            Juvederm
          </Typography>
          {juvedermFillers &&
            juvedermFillers.map((item, index) => (
              <Typography
                key={index}
                component="li"
                variant="body1"
                sx={{
                  ml: "1rem",
                  color: "black",
                  marginBottom: "0.5rem",
                  listStyleType: "disc", // Ensures it's a standard unordered list style
                }}
              >
                {item}
              </Typography>
            ))}
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Typography
            variant="body1"
            sx={{
              color: "black",
              mb: "1rem",

              textDecoration: "underline",
            }}
          >
            Restylane
          </Typography>
          {restylaneFillers &&
            restylaneFillers.map((item, index) => (
              <Typography
                key={index}
                component="li"
                variant="body1"
                sx={{
                  ml: "1rem",
                  color: "black",
                  marginBottom: "0.5rem",
                  listStyleType: "disc", // Ensures it's a standard unordered list style
                }}
              >
                {item}
              </Typography>
            ))}
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Typography
            variant="body1"
            sx={{
              color: "black",
              mb: "1rem",
              textDecoration: "underline",
            }}
          >
            RHA
          </Typography>
          {rhaFillers &&
            rhaFillers.map((item, index) => (
              <Typography
                key={index}
                component="li"
                variant="body1"
                sx={{
                  ml: "1rem",
                  color: "black",
                  marginBottom: "0.5rem",
                  listStyleType: "disc", // Ensures it's a standard unordered list style
                }}
              >
                {item}
              </Typography>
            ))}
        </Grid>
      </Grid>
    </Box>
  );
}
