import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

library.add(
	faFacebook,
	faInstagram,
	faEnvelope
);

const Waves = (): JSX.Element => (
	<div className="waves">
		<div className="content">
			<svg className="svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
				<defs>
					<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
				</defs>
				<g className="parallax">
					<use xlinkHref="#gentle-wave" x="48" y="0" fill="#E30044" />
					<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,17,88,1)" />
					<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,36,102,1)" />
					<use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(255,66,122,1)" />
				</g>
			</svg>
		</div>
		<div className="box w-100 h-100 f-row-center-center">
			<ul className="social f-row-center-center">
				<li className="social__item">
					<a className="link" href="#0" title="Visiter notre page Facebook">
						<Icon icon={['fab', 'facebook']} />
					</a>
				</li>
				<li className="social__item">
					<a className="link" href="#0" title="Suivez nous sur insta !">
						<Icon icon={['fab', 'instagram']} />
					</a>
				</li>
				<li className="social__item">
					<a className="link" href="#0" title="Contactez-nous par mail">
						<Icon icon={['fas', 'envelope']} />
					</a>
				</li>
			</ul>
		</div>
	</div>
);

export default Waves;