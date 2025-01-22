import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
interface DescriptionWithListProps {
  title: string;
  mainText: string[];
  listItems: string[];
  subText?: string;
}

export default function FeaturedServiceDescriptionWithList({
  title,
  mainText,
  listItems,
  subText,
}: DescriptionWithListProps) {
  return (
    <Box sx={{ p: 2 }}>
      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: "2rem", md: "1.75rem" },
          fontWeight: "400",
          color: "text.secondary",
          mb: "1rem",
        }}
      >
        {title}
      </Typography>
      {mainText &&
        mainText.map((text, index) => (
          <Typography
            key={index}
            variant="body1"
            sx={{
              color: "black",
              mb: "1rem",
            }}
          >
            {text}
          </Typography>
        ))}
      <Grid container spacing={1}>
        {listItems &&
          listItems.map((item, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Typography
                component="li"
                variant="body1"
                sx={{
                  color: "black",
                  marginBottom: "0.5rem",
                  listStyleType: "disc",
                }}
              >
                {item}
              </Typography>
            </Grid>
          ))}
      </Grid>
      {subText && (
        <Typography
          variant="body1"
          sx={{
            color: "black",
            mt: "1rem",
          }}
        >
          {subText}
        </Typography>
      )}
    </Box>
  );
}
