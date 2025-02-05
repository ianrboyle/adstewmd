import { Box, Divider } from "@mui/material";
import FeaturedServiceBackgroundImage from "./individual-page-components/BackgroundImage";
import Grid from "@mui/material/Grid2";
import FeaturedServicesImageColumn from "./individual-page-components/ImageColumn";
import { PageType } from "../../constants/enums";
import { faceImages } from "../../constants/treatments-and-services/face/face";
import { bodyContourImages } from "../../constants/treatments-and-services/body/body-contouring";
import { miscImages } from "../../constants/treatments-and-services/misc-nav-items";
import AllTreatmentsSearchBarAndImages from "./AllTreatmentsSearchBarAndImages";
const allServicesImages = [...miscImages, ...faceImages, ...bodyContourImages];
export default function AllTreatmentsAndServices() {
  const sortedServices = allServicesImages.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <Box
      sx={{
        mt: { xs: "5rem", sm: "7rem", md: "7rem", lg: "9rem", xl: "7rem" },
        backgroundColor: "white",
      }}
    >
      <FeaturedServiceBackgroundImage
        imageSrc="/featured-services/botox-long.png"
        altText="fraxel"
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
          <AllTreatmentsSearchBarAndImages sortedServices={sortedServices} />
          {/* <Box
            sx={{
              width: { lg: "100%", xl: "90%" },
              p: { xs: 2, sm: 2, md: 4, xl: 0 },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "2rem", md: "2.25rem" },
                color: "text.secondary",
                whiteSpace: "normal",
                overflow: "hidden",
                mt: "1rem",
                mb: "1rem",
                p: 2,
              }}
            >
              All Treatments And Services
            </Typography>
            <Box
              component="form"
              sx={{
                p: 2,
                "& > :not(style)": { m: 1, width: "25ch" },
                color: "text.secondary",
                borderColor: "text.secondary",
              }}
            >
              <TextField
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{
                  color: "text.secondary",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "purple" }, // Default border color
                    "&:hover fieldset": { borderColor: "purple" }, // Hover border color
                    "&.Mui-focused fieldset": { borderColor: "purple" }, // Focus border color
                  },
                  "& .MuiInputBase-input": {
                    color: "purple", // Text color
                  },
                  "& .MuiInputLabel-root": {
                    color: "purple", // Label color
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "purple", // Label color when focused
                  },
                }}
                id="outlined-basic"
                label="Search Treatments"
                variant="outlined"
              />
            </Box>
            <FeaturedServicesSmallImagesGrid showTitle={false} imageProps={filteredServices} />
          </Box> */}
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
