import { Box, Typography } from "@mui/material";

interface HeadingProps {
  title: string;
  subtitle?: string;
}
export default function FeaturedServiceDescriptionPageHeading({ title, subtitle }: HeadingProps) {
  return (
    <Box sx={{ p: 2 }}>
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: "2rem", md: "2.25rem" },
          color: "black",
          whiteSpace: "normal",
          overflow: "hidden",
          mt: "1rem",
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body2"
          sx={{
            fontSize: "1.5rem",
            color: "text.secondary",
            whiteSpace: "normal",
            overflow: "hidden",
            mt: "1rem",
            lineHeight: "1.25",
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
