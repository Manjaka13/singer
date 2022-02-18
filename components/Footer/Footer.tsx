import React, { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Copyright from "components/Footer/Copyright";
import FooterTitle from "components/Footer/FooterTitle";
// import SingerMap from "components/Footer/SingerMap";
import { IContact, ICalendar } from "helpers/interface";
import { CONTACT, CALENDAR } from "helpers/const";

/*
	Footer wrapper
*/

const mappedContacts = CONTACT.map((contact: IContact) => (
	<li key={ uuidv4() }>
		{contact.link && (
			<a className="link tr-200" href={ contact.link } title="Voir">
				<Icon icon={ contact.icon } /> { contact.content }
			</a>
		)}
		{!contact.link && (
			<Fragment>
				<Icon icon={ contact.icon } /> { contact.content }
			</Fragment>
		)}
	</li>
));

const mappedCalendar = CALENDAR.map((calendar: ICalendar) => (
	<li className="calendar" key={ uuidv4() }>
		<div className="w-100 h-30px b-b f-r-ce-ce">
			{ calendar.day }
		</div>
		<div className="w-100 h-30px b-b f-r-ce-ce">
			{ calendar.opened ?
				<Icon className="green" icon={ ["fas", "check-circle"] } />
				:
				<Icon className="red" icon={ ["fas", "times-circle"] } />
			}
		</div>
	</li>
));

const Footer = (): JSX.Element => (
	<Fragment>
		<div className="footer bg-white mg-t-20">
			<div className="container">
				<div className="footer__content w-100 h-320px pd-b-20">
					{ /* Map */ }
					<div className="footer__item">
						<FooterTitle
							title="Localisation"
							icon={ ["fas", "map-marker-alt"] }
						/>
						<div className="footer__box map br-5 o-h w-100 b-b">
							{/*<SingerMap />*/}
						</div>
					</div>
					{ /* Contacts */ }
					<div id="contacts" className="footer__item">
						<FooterTitle
							title="Nous contacter"
							icon={ ["fas", "envelope"] }
						/>
						<ul className="footer__box f-c-st-be">
							{ mappedContacts }
						</ul>
					</div>
					{ /* Heure d'ouverture */ }
					<div className="footer__item">
						<FooterTitle
							title="Ouvertures"
							icon={ ["fas", "calendar-alt"] }
						/>
						<p className="pd-b-20">
							Horaires: <span className="b">9h</span> à <span className="b">11h</span> - <span className="b">14h</span> à <span className="b">18h</span>
						</p>
						<ul className="w-100 o-h f-r-st-st b-b">
							{ mappedCalendar }
						</ul>
						<div className="footer__box">
							<p className="pd-t-20">Souscrire à notre newsletter:</p>
							<form className="f-r-st-ce mg-t-20 b-b">
								<input	
									className="input"
									type="email"
									name="email"
									placeholder="Votre e-mail"
									required
								/>
								<button className="button" type="submit">
									<Icon icon={ ["fas", "envelope"] } /> Souscrire
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Copyright />
	</Fragment>
);

export default Footer;