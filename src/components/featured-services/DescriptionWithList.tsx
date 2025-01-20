import { Box, Typography } from "@mui/material";

interface DescriptionWithListProps {
  mainText: string;
  listItems: string[];
  subText: string;
}

export default function FeaturedServiceDescriptionWithList({ mainText, listItems, subText }: DescriptionWithListProps) {
  return (
    <Box sx={{ p: 2 }}>
      <Typography
        variant="body1"
        sx={{
          color: "black",
          mb: "1rem",
        }}
      >
        {mainText}
      </Typography>
      {listItems &&
        listItems.map((item, index) => (
          <Typography
            key={index}
            component="li"
            variant="body1"
            sx={{
              color: "black",
              marginBottom: "0.5rem",
              listStyleType: "disc", // Ensures it's a standard unordered list style
            }}
          >
            {item}
          </Typography>
        ))}
      <Typography
        variant="body1"
        sx={{
          color: "black",
          mt: "1rem",
        }}
      >
        {subText}
      </Typography>
    </Box>
  );
}
