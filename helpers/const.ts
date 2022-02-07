import { ISocial } from "helpers/interface";

const BASE_URL: string | undefined = process.env.NEXT_PUBLIC_BASEURL;
const SOCIAL: Array<ISocial> = [
	{
		icon: "facebook",
		title: "Visiter notre page Facebook",
		link: "#0",
	},
	{
		icon: "instagram",
		title: "Nous suivre sur Instagram",
		link: "#0",
	},
	{
		icon: "linkedin",
		title: "Se connecter sur LinkedIn",
		link: "#0",
	},
];

export { BASE_URL, SOCIAL };