import { Box } from "@mui/material";
import Image from "next/image";

interface AssociationsAndSocietiesImageProps {
  backgroundImage: string;
  altText: string;
  shrink?: boolean;
}
export default function AssociationsAndSocietiesImage({
  backgroundImage,
  altText,
  shrink = false,
}: AssociationsAndSocietiesImageProps) {
  const imageSize = {
    xs: 150,
    sm: shrink ? 150 : 200,
    md: 150,
    xl: 200,
  };
  return (
    <Box
      sx={{
        width: {
          xs: shrink ? "100px" : "150px",
          sm: shrink ? "100px" : "150px",
          md: shrink ? "75px" : "125px",
          lg: shrink ? "100px" : "150px",
          xl: shrink ? "125px" : "200px",
        },
        height: {
          xs: shrink ? "100px" : "150px",
          sm: shrink ? "100px" : "150px",
          md: shrink ? "75px" : "125px",
          lg: shrink ? "100px" : "150px",
          xl: shrink ? "125px" : "200px",
        },
        marginTop: { xs: shrink ? "1rem" : "auto", md: shrink ? "2rem" : "auto" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        margin: "0 auto",
      }}
    >
      <Image
        src={backgroundImage}
        alt={altText}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
        priority={false}
        width={imageSize.xs} // Use the smallest size
        height={imageSize.xs} // Use the smallest size
      />
    </Box>
  );
}
