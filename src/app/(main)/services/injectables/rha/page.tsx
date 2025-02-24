import RHA from "../../../../../components/treatments-and-services/injectables/RHA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RHA Denver CO",
  description: "RHA offered in Cherry Creek, Denver, CO and serving patients from the Denver Metropolitan Area",
};
export default function rhaPage() {
  return <RHA />;
}
