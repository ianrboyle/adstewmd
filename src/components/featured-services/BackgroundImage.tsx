import { Box } from "@mui/material";
import Image from "next/image";
interface BackgroundImageProps {
  imageSrc: string;
  altText: string;
}
export default function FeaturedServiceBackgroundImage({ imageSrc, altText }: BackgroundImageProps) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: { xs: "100px", sm: "175px", md: "200px" },
        overflow: "hidden",
      }}
    >
      <Image
        alt={altText}
        src={imageSrc}
        fill
        sizes="100vw"
        priority={false}
        style={{
          objectFit: "cover",
          objectPosition: "center 50%",
        }}
      />
    </Box>
  );
}
