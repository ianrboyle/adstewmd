import { Box } from "@mui/material";
import FeaturedServiceBackgroundImage from "../individual-page-components/BackgroundImage";
import FeaturedServicePage from "../individual-page-components/FeaturedServicesPage";
import {
  fraxelMainText,
  fraxelMainTitle,
  howManySessionsFraxelBody,
  howManySessionsFraxelTitle,
  whatDoesFraxelAddressListItems,
  whatDoesFraxelAddressMainBody,
  whatDoesFraxelAddressSubtext,
  whatDoesFraxelAddressTitle,
  whatIsFraxelBody,
  whatIsFraxelTitle,
} from "../../../constants/featured-services/face/fraxel";
import { PageType } from "../../../constants/enums";

export default function Fraxel() {
  return (
    <Box
      sx={{
        mt: { xs: "5rem", sm: "7rem", md: "7rem", lg: "9rem", xl: "7rem" },
        backgroundColor: "white",
      }}
    >
      <FeaturedServiceBackgroundImage
        imageSrc="/featured-services/face/fraxel.png"
        altText="fraxel"
        objectPosition="center 50%"
      />
      <FeaturedServicePage
        initialDescription={fraxelMainText}
        initialDescriptionTitle={fraxelMainTitle}
        sections={[
          { title: whatIsFraxelTitle, body: whatIsFraxelBody },
          {
            title: whatDoesFraxelAddressTitle,
            body: whatDoesFraxelAddressMainBody,
            listItems: whatDoesFraxelAddressListItems,
            isList: true,
            subText: whatDoesFraxelAddressSubtext,
          },
          { title: howManySessionsFraxelTitle, body: howManySessionsFraxelBody },
        ]}
        currentPage={PageType.genericPage}
      />
    </Box>
  );
}
