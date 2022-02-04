import { ISocial } from "helpers/interface";

const PROXY: string | undefined = process.env.NEXT_PUBLIC_PROXY;
const ENDPOINT: string | undefined = process.env.NEXT_PUBLIC_ENDPOINT;
const MODE: string | undefined = process.env.NEXT_PUBLIC_MODE;
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

export { PROXY, ENDPOINT, MODE, SOCIAL };
