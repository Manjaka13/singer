import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

library.add(faHeart);

const Copyright = (): JSX.Element => (
	<div className="copyright bg-theme pd-top-10 pd-bottom-10">
		<div className="copyright__container ctn f-row-center-start">
			<p className="prg white">
				Fait avec <Icon className="white" icon={["fas", "heart"]} /> par{" "}
				<a className="bold copyright__link" href="#0" title="Voir le profil">
					Hari
				</a>{" "}
				et{" "}
				<a className="bold copyright__link" href="#0" title="Voir le profil">
					Tahir
				</a>
				.
			</p>
			<p className="prg white">
				Copyright © {new Date().getFullYear()} Singer, tous droits réservés.
			</p>
		</div>
	</div>
);

export default Copyright;
