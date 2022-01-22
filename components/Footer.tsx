import React from "react";
import { v4 as uuidv4 } from "uuid";
import { IContactItem, ICalendarItem } from "helpers/interface";
import Copyright from "components/Copyright";
import SingerMap from "components/SingerMap";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

/*
	Footer component
*/

const contacts: Array<IContactItem> = [
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
		link: "https://facebook.com",
	},
	{
		icon: ["fab", "instagram"],
		content: "Nous sommes sur Insta !",
		link: "https://instagram.com",
	},
];

const calendars: Array<ICalendarItem> = [
	{
		day: "L",
		opening: "Matin fermé - 14h à 18h",
		opened: true,
	},
	{
		day: "M",
		opening: "9h à 11h - 14h à 18h",
		opened: true,
	},
	{
		day: "M",
		opening: "9h à 11h - Fermé après-midi",
		opened: true,
	},
	{
		day: "J",
		opening: "9h à 11h - 14h à 18h",
		opened: true,
	},
	{
		day: "V",
		opening: "9h à 11h - 14h à 18h",
		opened: true,
	},
	{
		day: "S",
		opening: "Etablissement fermé.",
		opened: false,
	},
	{
		day: "D",
		opening: "Etablissement fermé.",
		opened: false,
	},
];

const mappedContacts: Array<JSX.Element> = contacts.map(
	(contact: IContactItem) => (
		<li className="contacts__item" key={uuidv4()}>
			{contact.link && (
				<a className="contacts__link" href={contact.link} title="Aller voir">
					<Icon icon={contact.icon} /> {contact.content}
				</a>
			)}
			{!contact.link && (
				<span>
					<Icon icon={contact.icon} /> {contact.content}
				</span>
			)}
		</li>
	)
);

const mappedCalendar: Array<JSX.Element> = calendars.map(
	(calendar: ICalendarItem) => (
		<div className="contacts__calendar-col" key={uuidv4()}>
			<div className="contacts__calendar-row f-r-ce-ce border pd-top-5 pd-bottom-5">
				{calendar.day}
			</div>
			<div
				className={
					(calendar.opened
						? "contacts__calendar-row green b"
						: "contacts__calendar-row red") +
					" f-r-ce-ce b-b pd-t-5 pd-b-5"
				}
			>
				{calendar.opened && <Icon icon={["fas", "check-circle"]} />}
				{!calendar.opened && <Icon icon={["fas", "times-circle"]} />}
			</div>
		</div>
	)
);

const Footer = (): JSX.Element => (
	<section id="contacts" className="contacts bg-white">
		<div className="contacts__container ctn f-r-be-st">
			<div className="contacts__box w-30 pd-b-40">
				<h2 className="contacts__title pd-20 pd-l-0 pd-r-0">
					<Icon icon={["fas", "map-marker-alt"]} /> Localisation
				</h2>
				<div className="w-40 h-5px bg-theme br-5 mg-b-20"></div>
				<div className="contacts__map-box f-r-ce-ce w-100 h-200px br-5 o-h b-b">
					<SingerMap />
				</div>
			</div>
			<div className="contacts__box w-30 pd-b-40">
				<h2 className="contacts__title pd-20 pd-l-0 pd-r-0">
					<Icon icon={["fas", "envelope"]} /> Nous contacter
				</h2>
				<div className="w-40 h-5px bg-theme br-5 mg-b-20"></div>
				<ul className="contacts__list">{mappedContacts}</ul>
			</div>
			<div className="contacts__box w-30 pd-b-40">
				<h2 className="contacts__title pd-20 pd-l-0 pd-r-0">
					<Icon icon={["fas", "calendar-alt"]} /> Ouvertures
				</h2>
				<div className="w-40 h-5px bg-theme br-5 mg-b-20"></div>
				<p className="contacts__about mg-b-20 tx-j">
					Notre magasin est ouvert en semaine, n&apos;hésitez pas à prendre contact
					avec nous les offres promotionnelles et venir nous voir directement !
				</p>
				<p className="contacts__hours">Horaires: 9h à 11h - 14h à 18h</p>
				<div className="contacts__calendar f-r-st-st w-100 b-b mg-t-20 o-h br-5">
					{mappedCalendar}
				</div>
			</div>
		</div>
		<Copyright />
	</section>
);

export default Footer;
