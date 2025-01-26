import { Box, Divider } from "@mui/material";
import { PageType } from "../../../../constants/enums";
import Grid from "@mui/material/Grid2";
import {
  coolsculptTitle,
  coolsculptMain,
  whatIsCoolSculptTitle,
  whatIsCoolSculptBody,
  coolSculptResultsTitle,
  coolSculptResultsMain,
  coolSculptResultsList,
  coolSculptResultsSubtext,
  seeResultsTitle,
  seeResultsBody,
  goodCandidateTitle,
  goodCandidateBody,
} from "../../../../constants/featured-services/body/coolsculpting";
import FeaturedServiceBackgroundImage from "../individual-page-components/BackgroundImage";
import FeaturedServiceDescription from "../individual-page-components/Description";
import FeaturedServiceDescriptionPageHeading from "../individual-page-components/DescriptionPageHeading";
import FeaturedServiceDescriptionWithList from "../individual-page-components/DescriptionWithList";
import DividerWithContactButtons from "../individual-page-components/DividerWithContactButtons";
import FeaturedServicesImageColumn from "../individual-page-components/ImageColumn";
import Image from "next/image";
export default function Coolsculpting() {
  return (
    <Box
      sx={{
        mt: { xs: "5rem", sm: "7rem", md: "7rem", lg: "9rem", xl: "7rem" },
        backgroundColor: "white",
      }}
    >
      <FeaturedServiceBackgroundImage
        imageSrc="/featured-services/body/body-contour3.png"
        altText="botox"
        objectPosition="center 65%"
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
            <FeaturedServiceDescriptionPageHeading title={coolsculptTitle} body={[coolsculptMain]} />
            <Box
              sx={{
                overflow: "hidden",
                width: "75%",
                height: "auto",
                p: 2,
              }}
            >
              {/* Image */}
              <Image
                src="/featured-services/body/coolsculpt-big.png"
                alt="coolsculpt"
                priority={false}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                width={400}
                height={300}
              />
            </Box>
            <DividerWithContactButtons />
            <FeaturedServiceDescription title={whatIsCoolSculptTitle} body={whatIsCoolSculptBody} />
            <Box
              sx={{
                overflow: "hidden",
                width: { md: "75%", lg: "100%" },
                height: "auto",
                p: 2,
                iframe: {
                  width: "100%",
                  height: "calc(100vw * 0.5625)", // Maintains 16:9 aspect ratio
                  "@media (max-width: 600px)": {
                    height: "300px",
                  },
                  "@media (min-width: 600px) and (max-width: 960px)": {
                    height: "400px",
                  },
                  "@media (min-width: 960px)": {
                    height: "500px",
                  },
                },
              }}
            >
              <iframe style={{ border: 0 }} src="https://www.youtube.com/embed/S77_8J6uxPs" allowFullScreen />
            </Box>

            <FeaturedServiceDescriptionWithList
              title={coolSculptResultsTitle}
              mainText={coolSculptResultsMain}
              listItems={coolSculptResultsList}
              subText={coolSculptResultsSubtext}
            />
            <FeaturedServiceDescription title={seeResultsTitle} body={seeResultsBody} />
            <FeaturedServiceDescription title={goodCandidateTitle} body={goodCandidateBody} />
            <Box
              sx={{
                overflow: "hidden",
                width: "100%",
                height: "auto",
                p: 2,
              }}
            >
              {/* Image */}
              <Image
                src="/featured-services/body/bra-fat.png"
                alt="coolsculpt"
                priority={false}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                width={400}
                height={300}
              />
            </Box>
            <Grid spacing={2} container sx={{ p: 2 }}>
              <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                <Box
                  sx={{
                    overflow: "hidden",
                    width: "100%",
                    height: "auto",
                  }}
                >
                  {/* Image */}
                  <Image
                    src="/featured-services/body/accolades.png"
                    alt="coolsculpt"
                    priority={false}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    width={400}
                    height={300}
                  />
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                <Box
                  sx={{
                    overflow: "hidden",
                    width: "100%",
                    height: "auto",
                  }}
                >
                  {/* Image */}
                  <Image
                    src="/featured-services/body/accolades-2021.png"
                    alt="coolsculpt"
                    priority={false}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    width={400}
                    height={300}
                  />
                </Box>
              </Grid>
            </Grid>
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
