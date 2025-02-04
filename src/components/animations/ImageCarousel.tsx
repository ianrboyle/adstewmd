"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import { CardImageProps } from "../../interfaces/card-image-props";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
interface Props {
  images: CardImageProps[];
}

// const swipeVariants = {
//   enter: (direction: number) => ({
//     x: direction > 0 ? "100%" : "-100%",
//     opacity: 0,
//     scale: 1.1,
//   }),
//   center: {
//     x: 0,
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.8, ease: [0.56, 0.03, 0.12, 1.04] },
//   },
//   exit: (direction: number) => ({
//     x: direction > 0 ? "-100%" : "100%",
//     opacity: 0,
//     scale: 1,
//   }),
// };

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};

const ImageCarousel = ({ images }: Props) => {
  const [[imageCount, direction], setImageCount] = useState<[number, number | undefined]>([0, 0]);

  const activeImageIndex = wrap(0, images.length, imageCount);

  const swipeToImage = (swipeDirection: number) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };

  const dragEndHandler = (dragInfo: { offset: { x: any } }) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  return (
    <Box
      className="outermost-box"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "transparent",
        fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
        width: "100vw", // Full viewport width
        height: "100vh", // Full viewport height
        overflow: "hidden", // Ensures nothing overflows
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "90%" }, // Takes full width of parent
          height: { xs: "100%", sm: "90%" }, // Takes full height of parent
          overflow: "hidden", // Prevents unwanted scrolling
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={imageCount}
            custom={direction}
            // variants={swipeVariants}
            initial="incoming"
            animate="active"
            style={{
              // backgroundImage: `url(${images[activeImageIndex].src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%", // Add this
              height: "100%", // Add this
              position: "relative",
            }}
            exit="exit"
            transition={sliderTransition}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
          >
            {" "}
            <Image
              // style={{ width: "100%", height: "100%" }}
              src={`${images[activeImageIndex].src}`}
              alt="Musician"
              fill
              sizes="(max-width: 600px) 100vw, 90vw"
            />
          </motion.div>
        </AnimatePresence>
      </Box>
      <Typography sx={{ color: "black" }} variant="h3">
        {images[activeImageIndex].title}
      </Typography>
      <Typography sx={{ color: "black", textAlign: "center" }} variant="body2">
        {images[activeImageIndex].text}
      </Typography>

      <Box className="buttons" sx={{ mt: 1.5, display: "flex", gap: 2 }}>
        <Button onClick={() => swipeToImage(-1)} sx={buttonStyles}>
          PREV
        </Button>
        <Button onClick={() => swipeToImage(1)} sx={buttonStyles}>
          NEXT
        </Button>
      </Box>
    </Box>
  );
};

{
  /* <Image
              // style={{ width: "100%", height: "100%" }}
              src={`${images[activeImageIndex].src}`}
              alt="Musician"
              layout="fill" // Makes the image stretch
              objectFit="cover" // E
            /> */
}

const buttonStyles = {
  outline: "none",
  border: "none",
  userSelect: "none",
  p: "10px 12px",
  transform: "skewY(-5deg) rotate(5deg)",
  // bgcolor: "grey",
  fontFamily: "inherit",
  fontSize: "inherit",
  // color: "white",
  transition: "0.07s ease-out transform",
  "&:hover": { cursor: "pointer" },
  "&:active": { transform: "scale(0.85) skewY(-5deg) rotate(5deg)" },
};

export default ImageCarousel;
