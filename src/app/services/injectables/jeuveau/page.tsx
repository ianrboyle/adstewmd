import Jeuveau from "../../../../components/featured-services/inidividual-pages/injectables/Jeuveau";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jeuveau in Denver, CO",
  description: "Jeuveau offered in Cherry Creek, Denver, CO and serving patients from the Denver Metropolitan Area",
};
export default function JeuveauPage() {
  return <Jeuveau />;
}
