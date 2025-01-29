import { Box, Typography } from "@mui/material";

interface HeadingProps {
  title: string;
  body?: string[] | React.ReactNode[];
}
export default function FeaturedServiceDescriptionPageHeading({ title, body }: HeadingProps) {
  return (
    <Box sx={{ p: 2 }}>
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: "2rem", md: "2.25rem" },
          color: "text.secondary",
          whiteSpace: "normal",
          overflow: "hidden",
          mt: "1rem",
          mb: "1rem",
        }}
      >
        {title}
      </Typography>
      {body &&
        body.map((paragraph, index) => (
          <Typography
            key={index}
            variant="body1"
            sx={{
              color: "black",
              whiteSpace: "normal",
              overflow: "hidden",
              mb: index != body.length - 1 ? "1rem" : "0rem",
            }}
          >
            {paragraph}
          </Typography>
        ))}
    </Box>
  );
}
