import { Box, Typography } from "@mui/material";
import Link from "next/link";
const links = [
  "About Us",
  "Patient Reviews",
  "Blog",
  "Products",
  "Gallery",
  "Contact",
  "Face Procedures",
  "Body",
  "Forms",
  "Payment",
];
export default function RightFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "30vh",
        border: "1px solid white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        {links.map((link, index) => (
          <Link href={`/${link.toLowerCase().replace(/\s+/g, "-")}`} key={index} style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "white",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {link}
            </Typography>
          </Link>
        ))}
      </Box>
      <Box>
        <Typography>MAP GOES HERE</Typography>
      </Box>
    </Box>
  );
}
