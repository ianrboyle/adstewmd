import { Box } from "@mui/material";
import Image from "next/image";
interface ImageProps {
  src: string;
  altText: string;
}
export default function AviClearImage({ src, altText }: ImageProps) {
  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        height: "auto",
        p: 2,
      }}
    >
      {/* Image */}
      <Image
        src={src}
        alt={altText}
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
  );
}
