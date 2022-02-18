import {
	ISocial,
	ISection,
	IProfile,
	IContact,
	ICalendar
} from "helpers/interface";

const BASE_URL: string | undefined = process.env.NEXT_PUBLIC_BASEURL;
const SOCIAL: Array<ISocial> = [
	{
		icon: ["fab", "facebook"],
		title: "Visiter notre page Facebook",
		link: "https://www.facebook.com/SingerChantepie35",
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
const TAHIR: Array<IProfile> = {
	name: "Tahir",
	link: "#0"
};
const HARI: Array<IProfile> = {
	name: "Tahir",
	link: "#0"
};
const CONTACT: Array<IContact> = [
	{
		icon: ["fas", "phone"],
		content: "+33 67 127 891 12"
	},
	{
		icon: ["fas", "envelope"],
		content: "chantepie@singer.fr"
	},
	{
		icon: ["fab", "facebook"],
		content: "Notre page Facebook",
		link: "#0"
	},
	{
		icon: ["fab", "instagram"],
		content: "Nous sommes sur insta !",
		link: "#0"
	},
];

const CALENDAR: Array<ICalendar> = [
	{
		day: "L",
		opening: "Etablissement fermé.",
		opened: false,
	},
	{
		day: "M",
		opening: "9h30 à 13h - 14h30 à 18h30",
		opened: true,
	},
	{
		day: "M",
		opening: "9h30 à 13h - 14h30 à 18h30",
		opened: true,
	},
	{
		day: "J",
		opening: "9h30 à 13h - 14h30 à 18h30",
		opened: true,
	},
	{
		day: "V",
		opening: "9h30 à 13h - 14h30 à 18h30",
		opened: true,
	},
	{
		day: "S",
		opening: "10h à 13h30.",
		opened: true,
	},
	{
		day: "D",
		opening: "Etablissement fermé.",
		opened: false,
	},
];

export {
	BASE_URL,
	SOCIAL,
	SECTION,
	TAHIR,
	HARI,
	CONTACT,
	CALENDAR
};