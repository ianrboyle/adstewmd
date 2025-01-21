import { Box, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

interface ImageWithAnimationProps {
  link: string;
  imageSrc: string;
  altText: string;
  text: string;
}
export default function FeaturedServicesImageWithAnimation({ link, imageSrc, altText, text }: ImageWithAnimationProps) {
  return (
    <Link
      href={`/services/${link}`}
      style={{ display: "flex", width: "100%", overflow: "hidden", marginBottom: "1rem" }}
    >
      <Box
        sx={{
          position: "relative",
          borderRadius: "0 0 5rem 0",
          overflow: "hidden",
          width: "calc(100% + 2rem)",
          marginLeft: "-2rem",
          "&:hover img": {
            transform: "translateX(2rem)",
          },
          "&:hover .overlay": {
            backgroundColor: "rgba(141, 110, 172, 0.7)", // Change overlay color on hover
          },
          "&:hover .hover-text": {
            transform: "translate(0%, -100%)",
            color: "white",
          },
        }}
      >
        {/* Image */}
        <Image
          src={imageSrc}
          alt={altText}
          priority={false}
          sizes="100vw"
          style={{
            width: "100%",
            height: "100%",
            transition: "transform 0.3s ease",
          }}
          width={400}
          height={300}
        />
        {/* Gray Overlay */}
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(211, 211, 211, 0.5)",
            pointerEvents: "none",
            zIndex: 1,
            transition: "background-color 0.3s ease", // Smooth transition for the background color
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "85%",
            left: "15%",
            zIndex: 2,
            textAlign: "center",
          }}
        >
          <Typography
            className="hover-text"
            variant="h3"
            sx={{
              transform: "translate(0%, -50%)",
              transition: "all 0.3s ease",
              color: "black",
              fontWeight: "500",
            }}
          >
            {text}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}
