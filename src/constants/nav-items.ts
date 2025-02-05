export interface SubLink {
  title: string;
  link: string;
}
interface Links {
  title: string;
  link: string;
  subLinks: SubLink[];
}
export const navItems: Links[] = [
  {
    title: "About",
    link: "/about-us",
    subLinks: [
      { title: "About Us", link: "/about-us" },
      { title: "Providers", link: "/providers" },
    ],
  },
  { title: "Patient Reviews", link: "/reviews", subLinks: [] },
  { title: "Products", link: "/products", subLinks: [] },
  { title: "Gallery", link: "/gallery", subLinks: [] },
  { title: "Contact", link: "/contact", subLinks: [] },
  {
    title: "Face Procedures",
    link: "/services/face",
    subLinks: [
      { title: "All Face Procedures", link: "/services/face" },
      { title: "Botox", link: "/services/injectables/botox" },
      { title: "Jeuveau", link: "/services/injectables/jeuveau" },
      { title: "Daxxify", link: "/services/injectables/daxxify" },
      { title: "Microneedling", link: "/services/face/microneedling" },
      { title: "Kybella", link: "/services/injectables/kybella" },
      { title: "Chemical Peels", link: "/services/face/chemical-peels" },
      { title: "Facials", link: "/services/face/facials" },
      { title: "Laser Resurfacing", link: "/services/face/laser-resurfacing" },
      { title: "Fraxel", link: "/services/injectables/fraxel" },
      { title: "Fillers", link: "/services/injectables/fillers" },
      { title: "Sculptra", link: "/services/injectables/sculptra" },
      { title: "AviClear Laser", link: "/services/face/avi-clear" },
      { title: "Diamond Glow", link: "/services/face/diamond-glow" },
    ],
  },
  {
    title: "Body",
    link: "/services/body",
    subLinks: [
      { title: "All Body Procedures", link: "/services/body" },
      { title: "Laser Hair Removal", link: "/services/laser-hair-removal" },
      { title: "Coolsculpting Elite", link: "/services/body/coolsculpting" },
      { title: "Emsculpt Neo", link: "/services/body/emsculpt" },
      { title: "Vanquish", link: "/services/body/vanquish" },
      { title: "Cutera Laser Vein Treatment", link: "/services/body/cutera" },
    ],
  },
  {
    title: "Forms",
    link: "/forms",
    subLinks: [],
  },
  {
    title: "Payment",
    link: "/payment",
    subLinks: [],
  },
];

export const lowerFooterLinks: Links[] = [
  {
    title: "Accessibility",
    link: "/accessibility-statement",
    subLinks: [],
  },
  {
    title: "Terms of Use",
    link: "/terms-of-use",
    subLinks: [],
  },
  {
    title: "Sitemap",
    link: "/sitemap",
    subLinks: [],
  },
];
