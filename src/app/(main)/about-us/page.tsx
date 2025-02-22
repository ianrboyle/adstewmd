import AboutUs from "../../../components/AboutUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};
export default function AboutPage() {
  return <AboutUs />;
}
