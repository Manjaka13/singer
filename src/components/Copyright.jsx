import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

library.add(faHeart);

const Copyright = () => (
	<div className="copyright bg-theme ctn-10-0">
		<div className="ctn copyright__container">
			<p className="prg">Fait avec <Icon className="white" icon={['fas', 'heart']} /> par <a className="bold copyright__link" href="#0" title="Voir le profil">Hari</a> et <a className="bold copyright__link" href="#0" title="Voir le profil">Tahir</a>.</p>
			<p className="prg">Copyright © {new Date().getFullYear()} Singer, tous droits réservés.</p>
		</div>
	</div>
);

export default Copyright;