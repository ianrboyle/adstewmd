import { bodyContourImages } from "./treatments-and-services/body/body-contouring";
import { faceImages } from "./treatments-and-services/face/face";
import { miscImages } from "./treatments-and-services/misc-nav-items";

const allServicesImages = [...miscImages, ...faceImages, ...bodyContourImages];
const allServicesLinks = allServicesImages.map((image) => {
  return image.link;
});

export const allLinks = [
  "/about-us",
  "/our-providers",
  "/accessibility-statement",
  "/terms-of-use",
  "/sitemap.xml",
  ...allServicesLinks,
];
