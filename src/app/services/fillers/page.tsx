import { Box, Button, Divider, Typography } from "@mui/material";
import FeaturedServiceBackgroundImage from "../../../components/featured-services/BackgroundImage";
import Grid from "@mui/material/Grid2";
import FeaturedServiceDescription from "../../../components/featured-services/Description";
const fillersServices =
  "Fillers injectables can soften your wrinkles or increase the volume in your lips or cheeks to make your features a bit more youthful. In the Cherry Creek area of Denver, Colorado, board-certified dermatologist Adrienne Stewart, MD, provides customized treatments using Juvéderm’s high-end product line at Aesthetic Surgery and Dermatology of Cherry Creek. Start planning your treatment by scheduling a consultation over the phone or online at the Cherry Creek office today.";

const fillersServicesTitle = "Fillers services offered in Cherry Creek, Denver, CO";

const whatAreFillersText = [
  "A popular line of cosmetic fillers you can inject into your face or hands to increase volume. Between fat loss and collagen decline with age, some of your facial features can change over time. You might have sunken cheeks, more defined under-eye hollows, or bonier hands. You can restore a more youthful appearance and texture using fillers.",
  "There are multiple fillers product lines to target different areas and achieve different goals. However, they all share a common ingredient: hyaluronic acid. This gooey substance occurs naturally in your body to provide hydration and lubrication. Injected under your skin, it offers a soft and supple texture.",
  "Your specialist at Aesthetic Surgery and Dermatology of Cherry Creek can help you reach your aesthetic goals by injecting at different depths for more definition and fullness.",
];

const fillerResultsTitle = "What are the results of fillers?";
const fillerResultsBody = [
  "Your skin changes with age as it produces less hyaluronic acid, collagen, and elastin. Fillers can counteract some of these effects by introducing more hyaluronic acid for greater volume.",
];
const whatAreFillersTitle = "What are fillers?";

const whatFillersCanDo = [
  "Smooth wrinkles and fine lines",
  "Boost volume around your cheekbones",
  "Define or volumize your lips",
  "Add plumpness to the backs of your hands",
  "Define facial contours",
];

const resultsLastTitle = "How long do the results of fillers last?";
const resultsLastBody = [
  "You can enjoy your filler results immediately after your injection appointment. While filler results aren’t permanent, they last up to a year. But that doesn’t mean they’re gone for good: If you enjoy the results of fillers, you can come back to Aesthetic Surgery and Dermatology of Cherry Creek for another visit and more injections.",
];

const howFillersFeelTitle = "What does treatment with fillers feel like?";
const howFillersFeelBody = [
  "Filler involves injections, so there can be some slight discomfort during the process. Aesthetic Surgery and Dermatology of Cherry Creek offers local anesthesia to numb the targeted areas before your injections for a more comfortable procedure.",
];
const juvedermFillers = ["Vollure XC", "Volbella XC", "Ultra XC", "Ultra Plus XC", "Volux, Voluma"];
const restylaneFillers = ["Lyft", "Defyne", "Refyne", "Kysse", "Contour"];
const rhaFillers = ["Redensity, 2, 3, 4", "Versa", "Radiesse+"];
export default function Fillers() {
  return (
    <Box
      sx={{
        mt: { xs: "5rem", sm: "7rem", md: "7rem", lg: "9rem", xl: "7rem" },
        backgroundColor: "white",
      }}
    >
      <FeaturedServiceBackgroundImage imageSrc="/featured-services/botox-long.png" altText="botox" />
      <Grid container spacing={0}>
        <Grid size={{ md: 12, lg: 8 }}>
          <Box
            sx={{
              ml: { md: "2rem", lg: "3rem", xl: "6rem" },
              width: { sm: "100%", md: "95%", xl: "90%" },
              border: "1px solid black",
              p: { xs: 2, sm: 2, md: 0 },
            }}
          >
            <Box sx={{ p: 2 }}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "2rem", md: "2.25rem" },
                  color: "black",
                  whiteSpace: "normal",
                  overflow: "hidden",
                  mt: "1rem",
                }}
              >
                Fillers In Denver, CO
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "1.5rem",
                  color: "text.secondary",
                  whiteSpace: "normal",
                  overflow: "hidden",
                  mt: "1rem",
                  lineHeight: "1.25",
                }}
              >
                Fillers offered in Cherry Creek, Denver, CO and serving patients from the Denver Metropolitan Area
              </Typography>
            </Box>
            <FeaturedServiceDescription title={fillersServicesTitle} body={[fillersServices]} />
            <Box sx={{ p: 2 }}>
              <Divider
                sx={{
                  width: "100%",
                  margin: "0 auto",
                  backgroundColor: "#e0e0e0",
                }}
                variant="middle"
              />
            </Box>
            <Box sx={{ p: 2, justifyContent: "left", display: "flex" }}>
              <Button sx={{ mr: "2.5rem" }}>Book Online</Button>
              <Button>303-333-6060</Button>
            </Box>
            <FeaturedServiceDescription title={whatAreFillersTitle} body={whatAreFillersText} />
            <FeaturedServiceDescription title={fillerResultsTitle} body={fillerResultsBody} />
            <Box sx={{ p: 2 }}>
              <Typography
                variant="body1"
                sx={{
                  color: "black",
                  mb: "1rem",
                }}
              >
                Your injection regimen is customized according to your goals. Fillers can:
              </Typography>
              {whatFillersCanDo &&
                whatFillersCanDo.map((item, index) => (
                  <Typography
                    key={index}
                    component="li"
                    variant="body1"
                    sx={{
                      color: "black",
                      marginBottom: "0.5rem",
                      listStyleType: "disc", // Ensures it's a standard unordered list style
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              <Typography
                variant="body1"
                sx={{
                  color: "black",
                  mt: "1rem",
                }}
              >
                If you have other cosmetic goals, you can get fillers as part of a comprehensive treatment plan at
                Aesthetic Surgery and Dermatology of Cherry Creek. For example, other injectables like Botox® and
                Jeuveau® can relax the muscles in your face to alleviate fine dynamic lines.
              </Typography>
            </Box>
            <FeaturedServiceDescription title={resultsLastTitle} body={resultsLastBody} />
            <FeaturedServiceDescription title={howFillersFeelTitle} body={howFillersFeelBody} />
            <Box sx={{ p: 2 }}>
              <Typography
                variant="body1"
                sx={{
                  color: "black",
                  mb: "1rem",
                }}
              >
                Call Aesthetic Surgery and Dermatology of Cherry Creek or schedule a consultation online for fillers
                today.
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
          </Box>
        </Grid>
        <Grid size={{ md: 12, lg: 4 }}>
          <Box
            sx={{
              ml: {
                height: "200px",

                border: "1px solid black",
              },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "2rem", md: "2.25rem" },
                color: "black",
                whiteSpace: "normal",
                overflow: "hidden",
                mt: "1rem",
              }}
            >
              Featured Services
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
