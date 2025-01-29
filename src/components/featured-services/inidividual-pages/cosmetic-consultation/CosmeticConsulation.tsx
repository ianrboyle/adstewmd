import { Box, Divider } from "@mui/material";
import FeaturedServiceBackgroundImage from "../individual-page-components/BackgroundImage";
import Grid from "@mui/material/Grid2";
import FeaturedServiceDescriptionPageHeading from "../individual-page-components/DescriptionPageHeading";
import DividerWithContactButtons from "../individual-page-components/DividerWithContactButtons";
import FeaturedServiceDescription from "../individual-page-components/Description";
import FeaturedServicesAccordian from "../Accordian";
import FeaturedServicesImageColumn from "../individual-page-components/ImageColumn";
import { PageType } from "../../../../constants/enums";
import {
  consulationQuestionsToAskBody,
  consulationQuestionsToAskListItems,
  consulationQuestionsToAskSubtext,
  consulationQuestionsToAskTitle,
  cosmeticConsulationBenefitsAccordianData,
  cosmeticConsulationBenefitsBody,
  cosmeticConsulationBenefitsTitle,
  cosmeticConsulationMainText,
  cosmeticConsulationMainTitle,
  whatIsACosmeticConsulationBody,
  whatIsACosmeticConsulationTitle,
} from "../../../../constants/featured-services/cosmetic-consulation";
import FeaturedServiceDescriptionWithList from "../individual-page-components/DescriptionWithList";
export default function CosmeticConsulation() {
  return (
    <Box
      sx={{
        mt: { xs: "5rem", sm: "7rem", md: "7rem", lg: "9rem", xl: "7rem" },
        backgroundColor: "white",
      }}
    >
      <FeaturedServiceBackgroundImage
        imageSrc="/featured-services/botox-long.png"
        altText="botox"
        objectPosition="center 50%"
      />
      <Grid
        container
        spacing={4}
        sx={{
          justifyContent: "center",
          display: "flex",
          margin: "0 auto",
        }}
      >
        <Grid
          size={{ md: 12, lg: 8 }}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: { lg: "100%", xl: "90%" },
              p: { xs: 2, sm: 2, md: 4, xl: 0 },
            }}
          >
            <FeaturedServiceDescriptionPageHeading
              title={cosmeticConsulationMainTitle}
              body={[cosmeticConsulationMainText]}
            />

            <DividerWithContactButtons />
            <FeaturedServiceDescription title={whatIsACosmeticConsulationTitle} body={whatIsACosmeticConsulationBody} />
            <FeaturedServiceDescription
              title={cosmeticConsulationBenefitsTitle}
              body={cosmeticConsulationBenefitsBody}
            />

            <FeaturedServicesAccordian title={""} content={cosmeticConsulationBenefitsAccordianData} />

            <FeaturedServiceDescriptionWithList
              title={consulationQuestionsToAskTitle}
              mainText={consulationQuestionsToAskBody}
              listItems={consulationQuestionsToAskListItems}
              subText={consulationQuestionsToAskSubtext}
            />
          </Box>
        </Grid>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ mr: "-1px", display: { xs: "none", lg: "block" } }}
        />
        <Grid
          size={{ md: 12, lg: 3 }}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FeaturedServicesImageColumn currentPage={PageType.genericPage} />
        </Grid>
      </Grid>
    </Box>
  );
}
