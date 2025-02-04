import { CardImageProps } from "../../interfaces/card-image-props";
import { IProviderInfo } from "../../interfaces/provider-info";

const adrienneTitle = "Meet Dr. Adrienne Stewart, Board-Certified Dermatologist";
const adrienneTextNextToImage = [
  "Adrienne Stewart, MD, is a board-certified dermatologist at Aesthetic Surgery and Dermatology of Cherry Creek in Denver, Colorado. She’s passionate about helping patients feel comfortable in their skin. She has more than 29 years of medical and cosmetic dermatology experience and stays abreast with the latest advances in technologies and proven treatments.",
  "Dr. Stewart has over 25 years of experience completing injections. She taught cosmetic dermatology injection techniques at the University of Colorado in Denver for years and regularly takes continuing cadaver classes on injection techniques and theory.",
];
const adrienneImageProps: CardImageProps = {
  title: "Adrienne Stewart, MD",
  link: "adrienne-stewart-md",
  altText: "Adrienne Stewart MD",
  src: "/providers/Adrienne.png",
  text: "Founder / Board Certified Dermatologist",
};
const adrienneTextBody: string[] = [
  "Dr. Stewart attends yearly classes, studying the facial muscles and how to best combat common signs of aging.",

  "Dr. Stewart is passionate about giving back to her community and teaching next-generation dermatologists. She enjoys improving her patients’ lives by improving their skin health, appearance, and self-confidence. Dr. Stewart develops strong, long-lasting interpersonal relationships with her patients.",

  "She earned her bachelor’s and medical degrees at Tulane University in New Orleans, Louisiana. She also completed an internship and residency in dermatology at Tulane Charity Hospital, where she was a chief resident.",

  "Dr. Stewart is a clinical assistant professor at the University of Colorado and a clinical instructor for internal medicine residents at St. Joseph Hospital in Denver.",

  "She is also a national Botox® trainer and fellow of the American Academy of Dermatology. Dr. Stewart is a member of numerous professional organizations, including the Women’s Dermatologic Society, Colorado Medical Society, Colorado Dermatologic Society, Denver Medical Society, and the American Society of Cosmetic Dermatology and Aesthetic Surgery.",

  "She has been featured on numerous media programs and in publications, including WB, CBC, ABC, NBC, and Fox News, as well as Elle Magazine, Vogue Magazine, Bloom, and 5280 Magazine, which awarded her Top Dermatologist. She also regularly presents at prestigious medical seminars.",

  "In her free time, Dr. Stewart loves gardening, spending time with her husband, and cheering on the Nuggets, Avalanche, and Broncos.",

  "Dr. Stewart welcomes new and existing patients to Aesthetic Surgery and Dermatology of Cherry Creek and looks forward to maximizing their skin’s health.",
];

const adrienneInfo: IProviderInfo = {
  title: adrienneTitle,
  image: adrienneImageProps,
  textNextToImage: adrienneTextNextToImage,
  textBody: adrienneTextBody,
};
export default adrienneInfo;
