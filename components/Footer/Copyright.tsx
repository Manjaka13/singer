import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { HARI, TAHIR } from "helpers/const";

/*
	Bottom copyright section
*/

const Copyright = (): JSX.Element => (
	<footer className="f-r-ce-ce bg-t pd-t-10 pd-b-10">
		<p className="white pd-r-5">
			Fait avec <Icon icon={ ["fas", "heart"] } /> par <a className="gold b" href={ HARI.link } title="Voir le profil">{ HARI.name }</a> et <a className="gold b" href={ TAHIR.link } title="Voir le profil">{ TAHIR.name }</a>.
		</p>
		<p className="white pd-l-5">
			Copyright © { new Date().getFullYear() } Singer, tous droits réservés.
		</p>
	</footer>
);

export default Copyright;