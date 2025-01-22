import { Box } from "@mui/material";
import { FeaturedServicesPages } from "../../../constants/enums";
import FeaturedServicePage from "./FeaturedServicesPage";
import FeaturedServiceBackgroundImage from "../BackgroundImage";
import {
  botoxServicesTitle,
  botoxServices,
  whatIsBotoxBody,
  whatIsBotoxTitle,
  botoxUsesMainText,
  botoxUsesList,
  botoxUsesTitle,
  botoxUsesSubtext,
  isBotoxForMeTitle,
  isBotoxForMeBody,
  whatHappensDuringInjectionsBody,
  whatHappensDuringInjectionsTitle,
  botoxExpectationsBody,
  botoxExpectationsTitle,
} from "../../../constants/featured-services/botox";

export default function BotoxFeaturedServicesPageContent() {
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
      <FeaturedServicePage
        initialDescription={botoxServices}
        initialDescriptionTitle={botoxServicesTitle}
        sections={[
          { title: whatIsBotoxTitle, body: whatIsBotoxBody },
          {
            title: botoxUsesTitle,
            body: botoxUsesMainText,
            listItems: botoxUsesList,
            isList: true,
            subText: botoxUsesSubtext,
          },
          {
            title: isBotoxForMeTitle,
            body: isBotoxForMeBody,
          },
          {
            title: whatHappensDuringInjectionsTitle,
            body: whatHappensDuringInjectionsBody,
          },
          {
            title: botoxExpectationsTitle,
            body: botoxExpectationsBody,
          },
        ]}
        currentPage={FeaturedServicesPages.botox}
      />
    </Box>
  );
}
