import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import AssociationsAndSocietiesImage from "./AssociationsAndSocietiesImages";
export default function AssociationsAndSocieties() {
  return (
    <Box sx={{ width: "100%", m: "auto", p: 2 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 6, sm: 4, md: 2, lg: 2 }}>
          <AssociationsAndSocietiesImage
            backgroundImage="https://www.adriennestewartmd.com/wp-content/uploads/2024/09/WDS.png"
            altText="Women's Dermatalogic Society"
          />
        </Grid>
        <Grid size={{ xs: 6, sm: 4, md: 2, lg: 2 }}>
          <AssociationsAndSocietiesImage
            backgroundImage="/associations/AAD.png"
            altText="American Academy of Dermatology"
          />
        </Grid>
        <Grid size={{ xs: 6, sm: 4, md: 2, lg: 2 }}>
          <AssociationsAndSocietiesImage
            backgroundImage="/associations/ASCDAS.png"
            altText="American Society of Cosmetic Dermatology & Aesthetic Surgery"
          />
        </Grid>
        <Grid size={{ xs: 6, sm: 4, md: 2, lg: 2 }}>
          <AssociationsAndSocietiesImage
            backgroundImage="/associations/Colorado-Dermatologic-Society.png"
            altText="Colorado Dermatalogic Society"
          />
        </Grid>
        <Grid size={{ xs: 6, sm: 4, md: 2, lg: 2 }}>
          <AssociationsAndSocietiesImage
            backgroundImage="/Colorado-Medical-Society.png"
            altText="Colorado Medical Society"
          />
        </Grid>
        <Grid size={{ xs: 6, sm: 4, md: 2, lg: 2 }}>
          <AssociationsAndSocietiesImage
            backgroundImage="https://www.adriennestewartmd.com/wp-content/uploads/2024/09/denver-medical-society.png"
            shrink={true}
            altText="Denver Medical Society"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
