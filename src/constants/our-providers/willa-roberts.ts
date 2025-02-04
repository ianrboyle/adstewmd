import { CardImageProps } from "../../interfaces/card-image-props";
import { IProviderInfo } from "../../interfaces/provider-info";

const willaTitle = "Meet Willa Roberts, Aesthetician";
const willaTextNextToImage = ["More information coming soon!"];
const willaImageProps: CardImageProps = {
  title: "Willa Roberts",
  link: "willa-roberts",
  altText: "Willa Roberts",
  src: "/providers/Willa.png",
  text: "Aesthetician",
};

const willaTextBody: string[] = [];
const willaInfo: IProviderInfo = {
  title: willaTitle,
  image: willaImageProps,
  textNextToImage: willaTextNextToImage,
  textBody: willaTextBody,
};
export default willaInfo;
