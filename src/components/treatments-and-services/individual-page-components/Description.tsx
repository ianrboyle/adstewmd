import { Box, Typography } from "@mui/material";

interface FeaturedServiceDescriptionProps {
  title: string;
  body: string[] | React.ReactNode[];
}

export default function FeaturedServiceDescription({ title, body }: FeaturedServiceDescriptionProps) {
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

      {body.map((paragraph, index) => (
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
