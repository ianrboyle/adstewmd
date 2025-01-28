import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { navItems } from "../../constants/nav-items";
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
        {navItems.map((item, index) => (
          <Link href={item.link} key={index} style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "white",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {item.title}
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
