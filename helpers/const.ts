import { ISocial, ISection } from "helpers/interface";

const BASE_URL: string | undefined = process.env.NEXT_PUBLIC_BASEURL;
const SOCIAL: Array<ISocial> = [
	{
		icon: ["fab", "facebook"],
		title: "Visiter notre page Facebook",
		link: "#0",
	},
	{
		icon: ["fab", "instagram"],
		title: "Nous suivre sur Instagram",
		link: "#0",
	},
	{
		icon: ["fas", "envelope"],
		title: "Nos contacts",
		link: "#0",
	},
];
const SECTION: Array<ISection> = [
	{
		name: "Services offert",
		icon: ["fas", "star"],
		title: "Divers services offert chez Singer Chantepie.",
		link: "#0"
	},
	{
		name: "Nos produits",
		icon: ["fas", "shopping-cart"],
		title: "Les produits en vente chez Singer.",
		link: "#0"
	},
	{
		name: "Mercerie et accessoires",
		icon: ["fas", "wrench"],
		title: "Découvrez les merceries et accessoires.",
		link: "#0"
	},
	{
		name: "Contacts",
		icon: ["fas", "envelope"],
		title: "Contactez-nous !",
		link: "#0"
	}
];

export { BASE_URL, SOCIAL, SECTION };