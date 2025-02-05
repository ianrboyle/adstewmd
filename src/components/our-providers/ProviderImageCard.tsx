import { Box, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { CardImageProps } from "../../interfaces/card-image-props";

interface ImageWithAnimationProps {
  image: CardImageProps;
}

export default function ProviderImageCard({ image }: ImageWithAnimationProps) {
  return (
    <Link
      href={`/${image.link}`}
      style={{
        display: "flex",
        width: "100%",
        overflow: "hidden",
        marginBottom: "1rem",
        flexDirection: "column",
        textDecoration: "none",
      }}
    >
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          // height: { xs: "250px", sm: "350px", md: "300px", lg: "200px", xl: "250px" },
          height: "auto",
          marginLeft: "-2rem",
          "&:hover img": {
            transform: "translateX(2rem)",
          },

          "&:hover .hover-text": {
            transform: "translate(0%, -100%)",
            color: "white",
          },
        }}
      >
        {/* Image */}
        <Image
          src={image.src}
          alt={image.altText}
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
        {/* <Box
          className="overlay"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(222, 201, 242, 0.25)",
            zIndex: 1,
            transition: "background-color 0.3s ease", // Smooth transition for the background color
          }}
        /> */}
      </Box>
      {image.title && (
        <Box
          sx={{
            mt: "1rem",
          }}
        >
          <Typography
            className="hover-text"
            variant="h1"
            sx={{
              color: "text.secondary",
              fontWeight: "400",
              fontSize: "2rem",
            }}
          >
            {image.title}
          </Typography>
        </Box>
      )}
    </Link>
  );
}
