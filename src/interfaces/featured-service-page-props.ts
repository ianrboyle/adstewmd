import { PageType } from "../constants/enums";

export interface FeaturedServicePageProps {
  initialDescription: string | React.ReactNode;
  initialDescriptionTitle: string;
  sections: {
    title: string;
    body: string[] | React.ReactNode[];
    isList?: boolean;
    listItems?: string[] | React.ReactNode[];
    subText?: string;
  }[];
  currentPage: PageType;
}
