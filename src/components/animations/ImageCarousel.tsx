import { motion } from "framer-motion";
import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { CardImageProps } from "../../interfaces/card-image-props";
import Image from "next/image";
import Link from "next/link";

interface Props {
  images: CardImageProps[];
}
export default function ImageCarousel({ images }: Props) {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Link
      href={`/providers/${images[index].link}`}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        textDecoration: "none",
      }}
    >
      <Box
        sx={{
          width: { xs: "100vw", sm: "90vw" },
          height: { xs: "65vh", sm: "75vh" },
          overflow: "hidden",
          position: "relative",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -50) {
              nextSlide();
            } else if (info.offset.x > 50) {
              prevSlide();
            }
          }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${images[index].src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          whileTap={{ cursor: "grabbing" }}
        >
          <Image src={images[index].src} alt={`Slide ${index + 1}`} fill sizes="100vw" priority={index === 0} />
        </motion.div>
        {/* Dots */}
        <Box
          sx={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 2,
          }}
        >
          {images.map((_, i) => (
            <IconButton key={i} onClick={() => setIndex(i)} size="small">
              <FiberManualRecordIcon color={i === index ? "primary" : "disabled"} />
            </IconButton>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          color: "black",
          mt: "1rem",
        }}
      >
        <Typography variant="h3">{images[index].title}</Typography>
        <Typography variant="body2">{images[index].text}</Typography>
      </Box>
    </Link>
  );
}
