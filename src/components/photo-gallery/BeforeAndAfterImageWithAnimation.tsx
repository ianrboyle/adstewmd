import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { CardImageProps } from "../../interfaces/card-image-props";

interface ImageWithAnimationProps {
  imageProps: CardImageProps;
}

export default function BeforeAndAfterImageWithAnimation({ imageProps }: ImageWithAnimationProps) {
  return (
    <Box>
      <Typography
        className="hover-text"
        variant="h3"
        sx={{
          color: "black",
          fontWeight: "500",
        }}
      >
        {imageProps.title}
      </Typography>
      <Typography sx={{ color: "black" }}>{imageProps.text}</Typography>

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          aspectRatio: "1 / 1",
          height: { xs: "250px", sm: "350px", md: "300px", lg: "200px", xl: "250px" },
        }}
      >
        {/* Image */}
        <Image
          src={imageProps.src}
          alt={imageProps.altText}
          priority={false}
          sizes="100vw"
          style={{
            width: "100%",
            height: "100%",
          }}
          width={400}
          height={300}
        />
      </Box>
    </Box>
  );
}
