import Image from "next/image";
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";
export default function EmsculptImages() {
  return (
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
            src="/featured-services/body/emsculpt/emsculpt2.png"
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
            src="/featured-services/body/emsculpt/emsculpt3.png"
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
            src="/featured-services/body/emsculpt/emsculpt4.png"
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
            src="/featured-services/body/emsculpt/emsculpt5.png"
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
            src="/featured-services/body/emsculpt/emsculpt6.png"
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
      <Grid size={12}>
        <Box
          sx={{
            overflow: "hidden",
            width: "100%",
            height: "auto",
          }}
        >
          {/* Image */}
          <Image
            src="/featured-services/body/emsculpt/emsculpt7.png"
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
  );
}
