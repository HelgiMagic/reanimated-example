import { Href } from "expo-router";

export type ProductOffer = {
    svgLink: string;
    name: string;
    backgroundColor: string;
    textColor: string;
    // id: number;
};

export type CategoriesBarItem = {
    svgLink: string;
    name: string;
    href: Href;
    id: number;
};
