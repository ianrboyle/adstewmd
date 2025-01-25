import Fillers from "../../../../components/featured-services/inidividual-pages/injectables/fillers/Fillers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fillers in Denver, CO",
  description: "Fillers offered in Cherry Creek, Denver, CO and serving patients from the Denver Metropolitan Area",
};
export default function FillersPage() {
  return <Fillers />;
}
