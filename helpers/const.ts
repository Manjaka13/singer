import {
	ISocial,
	ISection,
	IProfile,
	IContact,
	ICalendar,
	IService,
	ITypeMachine,
	IMercerie,
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
		link: "#contacts",
	},
];
const SECTION: Array<ISection> = [
	{
		name: "Nos produits",
		icon: ["fas", "shopping-cart"],
		title: "Les produits en vente chez Singer.",
		link: "#categories",
	},
	{
		name: "Mercerie et accessoires",
		icon: ["fas", "wrench"],
		title: "Découvrez les merceries et accessoires.",
		link: "#mercerie",
	},
	{
		name: "Services offert",
		icon: ["fas", "star"],
		title: "Divers services offert chez Singer Chantepie.",
		link: "#services",
	},
	{
		name: "Contacts",
		icon: ["fas", "envelope"],
		title: "Contactez-nous !",
		link: "#contacts",
	},
];
const TAHIR: IProfile = {
	name: "Tahir",
	link:
		"https://www.linkedin.com/in/rakotoarisoa-tahiriniaina-andrian-4a01aa211/",
};
const HARI: IProfile = {
	name: "Hari",
	link: "https://linkedin.com/in/harijaona-rajaonson",
};
const CONTACT: Array<IContact> = [
	{
		icon: ["fas", "phone"],
		content: "+33 67 127 891 12",
	},
	{
		icon: ["fas", "envelope"],
		content: "chantepie@singer.fr",
	},
	{
		icon: ["fab", "facebook"],
		content: "Notre page Facebook",
		link: "https://www.facebook.com/SingerChantepie35",
	},
	{
		icon: ["fab", "instagram"],
		content: "Nous sommes sur insta !",
		link: "#0",
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
	"https://i.pinimg.com/originals/c8/17/bc/c817bca5fb0f41d6ac98444840b7aa8d.jpg",
	"https://i.pinimg.com/originals/b2/11/7c/b2117c3d1cd0cc1a621d8c9bd74702d7.jpg",
];
const SERVICE: Array<IService> = [
	{
		title: "Réparation de machines à coudres",
		content:
			"Aventure couture répare et entretien sur place,  les machines à coudre toutes marques. La vérification et le devis sont gratuit !",
	},

	{
		title: "Vente d'accessoires et merceries",
		content:
			"Aiguilles, canettes, semelle surjet, semelle pose biais et d'autre.",
	},
];
const TYPE_MACHINE: Array<ITypeMachine> = [
	{
		name: "Machine à coudre mécanique",
		description:
			"Facile d’utilisation, vous retrouvez les points principaux d'une machine : le droit, le zigzag, la boutonnière, idéal pour la couture de base, type ourlet, réparation d'accros…",
		image:
			"https://i.pinimg.com/originals/76/52/c4/7652c47865a9866b0903671c1f230012.jpg",
	},
	{
		name: "Machine à coudre éléctronique",
		description:
			"D’une grande simplicité et très ludique, vous l'utiliserez pour la couture de base, mais surtout pour tous les loisirs créatifs, sacs, trousses, personnalisation grâce aux lettrages, et aux points fantaisies ,customisation de vos vêtements, confection……. Ainsi qu’une multitude de réglage facilitant la couture !",
		image:
			"https://i.pinimg.com/originals/70/3b/aa/703baae69605241553e9adc77f4281af.jpg",
	},
	{
		name: "Brodeuse",
		description:
			"La brodeuse sera votre meilleur copine pour vos activités créatives de broderies et lettrages. Vous pourrez personnaliser vos vêtements, linges de maisons,… la seule limite votre imagination !!!",
		image:
			"https://i.pinimg.com/originals/5d/69/ea/5d69ea0314b73f9422e664d2530c1ebd.jpg",
	},
];

const SLIDE_MERCERIE: Array<IMercerie> = [
	{
		name: "Accessoire",
		description:
			"Proin porta iaculis purus, et congue nibh placerat eu. Mauris interdum lectus aliquet erat tincidunt suscipit ultricies eget purus. Nulla mattis orci eget iaculis pharetra. Vestibulum mattis magna non volutpat malesuada",
		image:
			"https://i.pinimg.com/originals/b2/11/7c/b2117c3d1cd0cc1a621d8c9bd74702d7.jpg",
	},
	/* {
		name: "Pièces détachées",
		description:
			"Suspendisse pellentesque vehicula nulla vel faucibus. Nullam hendrerit augue in dapibus eleifend. Nullam aliquet luctus posuere. Morbi ornare porttitor sodales. In luctus feugiat malesuada. Phasellus consectetur nec.",
		image: "/assets/cover-slide/slide2.jpg",
	}, */
];

export {
	BASE_URL,
	SOCIAL,
	SECTION,
	TAHIR,
	HARI,
	CONTACT,
	CALENDAR,
	SLIDE_SERVICE,
	SERVICE,
	TYPE_MACHINE,
	SLIDE_MERCERIE,
};
