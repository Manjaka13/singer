import React from "react";
import { v4 as uuidv4 } from "uuid";
import Copyright from "./Copyright";
import SingerMap from "./SingerMap";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faMapMarkerAlt,
	faEnvelope,
	faPhone,
	faCalendar,
	faTimesCircle,
	faCheckCircle,
	faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

library.add(
	faMapMarkerAlt,
	faEnvelope,
	faPhone,
	faCalendar,
	faFacebook,
	faInstagram,
	faTimesCircle,
	faCheckCircle,
	faCalendarAlt
);

const contacts = [
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

const calendars = [
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
]

const Footer = () => {
	const mappedContacts = contacts.map(contact => (
		<li className="contacts__item" key={ uuidv4() }>
			{contact.link && (
				<a
					className="contacts__link"
					href={contact.link}
					title="Aller voir"
				>
					<Icon icon={contact.icon} /> { contact.content }
				</a>
			)}
			{!contact.link && (
				<span>
					<Icon icon={contact.icon} /> { contact.content }
				</span>
			)}
		</li>
	));

	const mappedCalendar = calendars.map(calendar => (
		<div className="contacts__calendar-col" key={ uuidv4() }>
			<div className="contacts__calendar-row">
				{ calendar.day }
			</div>
			<div className={calendar.opened ? 'contacts__calendar-row green' : 'contacts__calendar-row red'} >
				{calendar.opened && (
					<Icon icon={['fas', 'check-circle']} />
				)}
				{!calendar.opened && (
					<Icon icon={['fas', 'times-circle']} />
				)}
			</div>
		</div>
	));

	return (
		<section id="contacts" className="contacts">
			<div className="ctn contacts__container">
				<div className="contacts__box">
					<h2 className="contacts__title">
						<Icon icon={['fas', 'map-marker-alt']} /> Localisation
					</h2>
					<div className="contacts__separator"></div>
					<div className="contacts__map-box">
						{process.env.MODE != "local" && (
							<SingerMap />
						)}
					</div>
				</div>
				<div className="contacts__box">
					<h2 className="contacts__title">
						<Icon icon={['fas', 'envelope']} /> Nous contacter
					</h2>
					<div className="contacts__separator"></div>
					<ul className="contacts__list">
						{ mappedContacts }
					</ul>
				</div>
				<div className="contacts__box">
					<h2 className="contacts__title">
						<Icon icon={['fas', 'calendar-alt']} /> Ouvertures
					</h2>
					<div className="contacts__separator"></div>
					<p className="contacts__about">
						Notre magasin est ouvert en semaine, n'hésitez pas à prendre
						contact avec nous les offres promotionnelles et venir nous
						voir directement !
					</p>
					<p className="contacts__hours">Horaires: 9h à 11h - 14h à 18h</p>
					<div className="contacts__calendar">
						{ mappedCalendar }
					</div>
				</div>
			</div>
			<Copyright />
		</section>
	);
}

export default Footer;