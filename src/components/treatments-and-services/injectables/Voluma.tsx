import { Box } from "@mui/material";
import FeaturedServiceBackgroundImage from "../individual-page-components/BackgroundImage";
import FeaturedServicePage from "../individual-page-components/FeaturedServicesPage";
import {
  howDoesVolumaWorkBody,
  howDoesVolumaWorkTitle,
  howLongDoesVolumaLastBody,
  howLongDoesVolumaLastTitle,
  howToPrepareVolumaBody,
  howToPrepareVolumaTitle,
  volumaMainText,
  volumaMainTitle,
  whatCanIExpectVolumaBody,
  whatCanIExpectVolumaTitle,
  whatDoesVolumaAddressListItems,
  whatDoesVolumaAddressMainBody,
  whatDoesVolumaAddressSubtext,
  whatDoesVolumaAddressTitle,
  whatIsVolumaBody,
  whatIsVolumaTitle,
} from "../../../constants/treatments-and-services/injectables/voluma";
import { PageType } from "../../../constants/enums";

export default function Voluma() {
  return (
    <Box
      sx={{
        mt: { xs: "5rem", sm: "7rem", md: "7rem", lg: "9rem", xl: "7rem" },
        backgroundColor: "white",
      }}
    >
      <FeaturedServiceBackgroundImage
        imageSrc="/featured-services/fillers-long.png"
        altText="botox"
        objectPosition="center 0%"
      />
      <FeaturedServicePage
        initialDescription={volumaMainText}
        initialDescriptionTitle={volumaMainTitle}
        sections={[
          { title: whatIsVolumaTitle, body: whatIsVolumaBody },
          { title: howDoesVolumaWorkTitle, body: howDoesVolumaWorkBody },
          {
            title: whatDoesVolumaAddressTitle,
            body: whatDoesVolumaAddressMainBody,
            listItems: whatDoesVolumaAddressListItems,
            isList: true,
            subText: whatDoesVolumaAddressSubtext,
          },
          { title: howToPrepareVolumaTitle, body: howToPrepareVolumaBody },
          { title: whatCanIExpectVolumaTitle, body: whatCanIExpectVolumaBody },
          { title: howLongDoesVolumaLastTitle, body: howLongDoesVolumaLastBody },
        ]}
        currentPage={PageType.genericPage}
      />
    </Box>
  );
}
