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
      <Box
        sx={{
          position: "relative",
          height: { xs: "350px", sm: "350px", md: "200px", lg: "250px" },
          width: { xs: "100%", sm: "90%", md: "100%", lg: "90%", xl: "75%" },
        }}
      >
        <Link href="/contact">
          <Image
            src="/map-location.png"
            alt="Map Location"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Link>
      </Box>
    </Box>
  );
}
