import {
	ISocial,
	ISection,
	IProfile,
	IContact,
	ICalendar,
	IService,
	ITypeMachine,
	IMercerie
} from "helpers/interface";

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
		name: "Nos produits",
		icon: ["fas", "shopping-cart"],
		title: "Les produits en vente chez Singer.",
		link: "#categories"
	},
	{
		name: "Mercerie et accessoires",
		icon: ["fas", "wrench"],
		title: "Découvrez les merceries et accessoires.",
		link: "#mercerie"
	},
	{
		name: "Services offert",
		icon: ["fas", "star"],
		title: "Divers services offert chez Singer Chantepie.",
		link: "#services"
	},
	{
		name: "Contacts",
		icon: ["fas", "envelope"],
		title: "Contactez-nous !",
		link: "#contacts"
	}
];
const TAHIR: IProfile = {
	name: "Tahir",
	link: "#0"
};
const HARI: IProfile = {
	name: "Hari",
	link: "https://linkedin.com/in/harijaona-rajaonson"
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
const SLIDE_SERVICE: Array<string> = [
	"/assets/cover-slide/slide1.jpg",
	"/assets/cover-slide/slide2.jpg",
	"/assets/cover-slide/slide3.jpg",
];
const SERVICE: Array<IService> = [
	{
		title: "Réparation de machines à coudres",
		content:
			"Proin porta iaculis purus, et congue nibh placerat eu. Mauris interdum lectus aliquet erat tincidunt suscipit ultricies eget purus. Nulla mattis orci eget iaculis pharetra.",
	},
	{
		title: "Reprise de vielles modèles",
		content:
			"Donec faucibus euismod quam. Curabitur eros enim, venenatis eget mi at, elementum commodo urna. Etiam non facilisis erat. Quisque quis finibus nisi, eget vehicula ipsum.",
	},
	{
		title: "Achat de pièces détachées",
		content:
			"Nulla ut turpis et tellus vehicula pellentesque vitae eget turpis. Vivamus auctor mi sit amet ex lobortis, eu euismod arcu consequat. Nulla eget est eget turpis bibendum viverra",
	},
];
const TYPE_MACHINE: Array<ITypeMachine> = [
	{
		name: "Machine à coudre mécanique",
		description:
			"Parcourir notre large catalogue de marques de machines à coudre totalement mécanique.",
		image: "/assets/type-machines/mecanique.jpg"
	},
	{
		name: "Machine à coudre éléctronique",
		description:
			"Nous avons plusieurs marques de machines à coudres qui eux sont éléctroniques.",
		image: "/assets/type-machines/electronique.jpg"
	},
	{
		name: "Brodeuse",
		description:
			"Chez Singer, vous pouvez choisir parmi une large liste dans notre catalogue pour les brodeuses.",
		image: "/assets/type-machines/brodeuse.jpg"
	},
	{
		name: "Surjeteuse",
		description:
			"Avec une grande collection de marques de surjeteuses vous trouverez à coup sûr votre bonheur.",
		image: "/assets/type-machines/surjeteuse.jpg"
	},
];

const SLIDE_MERCERIE: Array<IMercerie> = [
	{
		name: "Accessoire",
		description: "Proin porta iaculis purus, et congue nibh placerat eu. Mauris interdum lectus aliquet erat tincidunt suscipit ultricies eget purus. Nulla mattis orci eget iaculis pharetra. Vestibulum mattis magna non volutpat malesuada",
		image: "/assets/cover-slide/slide1.jpg"
	},
	{
		name: "Pièces détachées",
		description: "Suspendisse pellentesque vehicula nulla vel faucibus. Nullam hendrerit augue in dapibus eleifend. Nullam aliquet luctus posuere. Morbi ornare porttitor sodales. In luctus feugiat malesuada. Phasellus consectetur nec.",
		image: "/assets/cover-slide/slide2.jpg"
	}
];

export {
	SOCIAL,
	SECTION,
	TAHIR,
	HARI,
	CONTACT,
	CALENDAR,
	SLIDE_SERVICE,
	SERVICE,
	TYPE_MACHINE,
	SLIDE_MERCERIE
};