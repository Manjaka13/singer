import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Copyright from "components/Footer/Copyright";
import FooterTitle from "components/Footer/FooterTitle";
import { IContact, ICalendar } from "helpers/interface";
import { CONTACT, CALENDAR } from "helpers/const";
import Spinner from "components/Spinner";
import dynamic from "next/dynamic";

/*
	Footer wrapper
*/

/**Render the map on client side only */
const SingerMap = dynamic(() => import("./SingerMap"), { ssr: false });

const mappedContacts = CONTACT.map((contact: IContact) => (
	<li key={uuidv4()}>
		{contact.link && (
			<a className="link tr-200" href={contact.link} title="Voir">
				<Icon icon={contact.icon} /> {contact.content}
			</a>
		)}
		{!contact.link && (
			<Fragment>
				<Icon icon={contact.icon} /> {contact.content}
			</Fragment>
		)}
	</li>
));

const mappedCalendar = CALENDAR.map((calendar: ICalendar) => (
	<li className="calendar" key={uuidv4()}>
		<div className="w-100 h-30px b-b f-r-ce-ce">{calendar.day}</div>
		<div className="w-100 h-30px b-b f-r-ce-ce">
			{calendar.opened ? (
				<Icon className="green" icon={["fas", "check-circle"]} />
			) : (
				<Icon className="red" icon={["fas", "times-circle"]} />
			)}
		</div>
	</li>
));

const Footer = (): JSX.Element => {
	const [loading, setLoading] = useState<boolean>(false);
	const [submited, setSubmited] = useState<boolean>(false);

	const handleSubmit = (): void => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setSubmited(true);
		}, 1000);
	};

	return (
		<Fragment>
			<div className="footer bg-white mg-t-20">
				<div className="container">
					<div className="footer__content w-100 h-320px pd-b-20">
						{/* Map */}
						<div className="footer__item">
							<FooterTitle title="Localisation" icon={["fas", "map-marker-alt"]} />
							<div className="footer__box map br-5 o-h w-100 b-b">
								<SingerMap />
							</div>
						</div>
						{/* Contacts */}
						<div id="contacts" className="footer__item">
							<FooterTitle title="Nous contacter" icon={["fas", "envelope"]} />
							<ul className="footer__box f-c-st-be">{mappedContacts}</ul>
						</div>
						{/* Heure d'ouverture */}
						<div className="footer__item">
							<FooterTitle title="Ouvertures" icon={["fas", "calendar-alt"]} />
							<p className="pd-b-20">
								Horaires: <span className="b">9h30</span> à{" "}
								<span className="b">13h</span> - <span className="b">14h30</span> à{" "}
								<span className="b">18h30</span>
							</p>
							<ul className="w-100 o-h f-r-st-st b-b">{mappedCalendar}</ul>
							<div className="footer__box">
								<p className="pd-t-20">Souscrire à notre newsletter:</p>
								{!loading && !submited && (
									<form
										className="f-r-st-ce mg-t-20 b-b"
										onSubmit={() => handleSubmit()}
									>
										<input
											className="input"
											type="email"
											name="email"
											placeholder="Votre e-mail"
											required
										/>
										<button className="button" type="submit">
											<Icon className="icon" icon={["fas", "envelope"]} /> Souscrire
										</button>
									</form>
								)}
								{loading && <Spinner className="mg-t-20" />}
								{submited && (
									<p className="b green pd-t-20">Votre e-mail a été enregistré !</p>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Copyright />
		</Fragment>
	);
};

export default Footer;
