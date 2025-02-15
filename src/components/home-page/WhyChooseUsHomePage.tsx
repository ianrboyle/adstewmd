import { Box, Typography } from "@mui/material";
import OverlayComponent from "../Overlay";
import FeaturedServiceDescription from "../treatments-and-services/individual-page-components/Description";
import FadeUpAnimation from "../animations/FadeUpAnimation";

export default function WhyChooseUsHomePage() {
  return (
    <OverlayComponent
      backgroundImage="/why-choose-us.png"
      altText="background image"
      backgroundColor="rgba(0, 0, 0, 0.0)"
      borderRadius={{ xs: "0 0 0 0", md: "0 0 0 0" }}
      minHeight={{
        xs: "500px",
        sm: "700px",
        md: "900px",
        lg: "900px",
      }}
    >
      <>
        <FadeUpAnimation>
          <Box
            sx={{
              position: "absolute",
              left: 0,
              padding: 2,
              textAlign: "left",
              height: "100%",
              maxWidth: { xs: "100%", sm: "100%", md: "65%", lg: "50%" },
              backgroundColor: {
                xs: "rgba(245, 242, 242, 0.6)",
                sm: "rgba(245, 242, 242, 0.6)",

                md: "rgba(245, 242, 242, 0.1)",
              },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "black",
                fontSize: { xs: "2.5rem", sm: "3.5rem" },
                fontWeight: "300",
                whiteSpace: "normal",
                overflow: "hidden",
                padding: 1,
              }}
            >
              Why Choose Us
            </Typography>
            <FeaturedServiceDescription
              title={""}
              body={[
                "Adrienne Stewart, MD, is a board-certified dermatologist who is passionate about helping people feel comfortable in their own skin. She has more than 29 years of experience helping people with their medical and cosmetic dermatological needs. She’s always on top of the latest developments in skincare and offers her patients the newest, proven treatment technologies to improve their lives.",
                "Skin is the largest organ in the human body; it affects people’s self-confidence, personality, and ability to enjoy life. Dr. Stewart loves improving her patients’ lives by taking care of their skin-care needs and developing personal relationships with her patients.",
                "At Aesthetic Surgery & Dermatology of Cherry Creek, she also sees medical dermatology patients for everything from complete body checks to in-office cancer surgeries, acne, warts, and rashes. Many times a patient will come in for a cosmetic treatment, and Dr. Stewart will notice a medical problem with the patient’s skin and can address that need.",
              ]}
            ></FeaturedServiceDescription>
          </Box>
        </FadeUpAnimation>
      </>
    </OverlayComponent>
  );
}
