import BodyContour from "../../../components/treatments-and-services/body/BodyContour";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Body Contouring Denver CO",
  description:
    "Body Contouring offered in Cherry Creek, Denver, CO and serving patients from the Denver Metropolitan Area",
};
export default function BodyPage() {
  return <BodyContour />;
}
