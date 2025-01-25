import { Box, Divider } from "@mui/material";
import FeaturedServiceDescription from "./Description";
import Grid from "@mui/material/Grid2";
import FeaturedServicesImageColumn from "./ImageColumn";
import { CurrentPage } from "../../../../constants/enums";
import FeaturedServiceDescriptionPageHeading from "./DescriptionPageHeading";
import DividerWithContactButtons from "./DividerWithContactButtons";
import FeaturedServiceDescriptionWithList from "./DescriptionWithList";
import FillerTypes from "../injectables/fillers/FillerTypes";
import LaserFAQs from "../laser-hair-removal/LaserFAQs";
import FeaturedServiceBodyContourImages from "../body/BodyContourImages";

interface FeaturedServicePageProps {
  initialDescription: string;
  initialDescriptionTitle: string;
  sections: {
    title: string;
    body: string[];
    isList?: boolean;
    listItems?: string[];
    subText?: string;
  }[];
  currentPage: CurrentPage;
}

export default function FeaturedServicePage({
  sections,
  currentPage,
  initialDescription,
  initialDescriptionTitle,
}: FeaturedServicePageProps) {
  return (
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
          <FeaturedServiceDescriptionPageHeading title={initialDescriptionTitle} body={[initialDescription]} />
          <DividerWithContactButtons />
          {sections.map((section, index) =>
            section.isList && section.listItems ? (
              <FeaturedServiceDescriptionWithList
                key={index}
                title={section.title}
                mainText={section.body}
                subText={section.subText}
                listItems={section.listItems}
              />
            ) : (
              <FeaturedServiceDescription key={index} title={section.title} body={section.body as string[]} />
            )
          )}

          {currentPage === CurrentPage.fillers && <FillerTypes />}
          {currentPage === CurrentPage.laser && <LaserFAQs />}
          {currentPage === CurrentPage.body && <FeaturedServiceBodyContourImages />}
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
        <FeaturedServicesImageColumn currentPage={currentPage} />
      </Grid>
    </Grid>
  );
}
