import BodyContour from "../../../components/featured-services/inidividual-pages/body/BodyContour";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Body Contouring in Denver, CO",
  description:
    "Body Contouring offered in Cherry Creek, Denver, CO and serving patients from the Denver Metropolitan Area",
};
export default function BodyPage() {
  return <BodyContour />;
}
