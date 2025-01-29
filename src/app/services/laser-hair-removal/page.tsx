import LaserHairRemovalPage from "../../../components/treatments-and-services/laser-hair-removal/LaserHairRemovalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laser Hair Removal in Denver, CO",
  description:
    "Laser Hair Removal offered in Cherry Creek, Denver, CO and serving patients from the Denver Metropolitan Area",
};
export default function LaserHairRemoval() {
  return <LaserHairRemovalPage />;
}
