import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { navItems } from "../../constants/nav-items";
import Image from "next/image";

export default function RightFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "30vh",
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
      <Link href="/contact" style={{ width: "90%" }}>
        <Box
          sx={{
            position: "relative",
            height: { xs: "350px", sm: "350px", md: "200px", lg: "250px" },
          }}
        >
          <Image
            src="/map-location.png"
            alt="Map Location"
            fill
            sizes="(min-width: 1536px) 75vw, (min-width: 1200px) 90vw, (min-width: 900px) 100vw, (min-width: 600px) 90vw, 100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Box>
      </Link>
    </Box>
  );
}
