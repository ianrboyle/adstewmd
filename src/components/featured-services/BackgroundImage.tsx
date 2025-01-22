import { Box } from "@mui/material";
import Image from "next/image";
interface BackgroundImageProps {
  imageSrc: string;
  altText: string;
  objectPosition: string;
}
export default function FeaturedServiceBackgroundImage({ imageSrc, altText, objectPosition }: BackgroundImageProps) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: { xs: "125px", sm: "175px", md: "200px" },
        overflow: "hidden",
      }}
    >
      <Image
        alt={altText}
        src={imageSrc}
        fill
        sizes="100vw"
        priority
        style={{
          objectFit: "cover",
          objectPosition: objectPosition,
        }}
      />
    </Box>
  );
}
