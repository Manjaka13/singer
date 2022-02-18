import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { ISocial } from "helpers/interface";
import { SOCIAL } from "helpers/const";

/*
	Wave animation
*/

const mappedSocial = SOCIAL.map((social: ISocial) => (
	<li className="social__item" key={ uuidv4() }>
		<a
			className="link"
			href={ social.link }
			title={ social.title }
		>
			<Icon icon={ social.icon } />
		</a>
	</li>
));

const Waves = (): JSX.Element => (
	<div className="waves">
		<div className="content">
			<svg
				className="svg"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				viewBox="0 24 150 28"
				preserveAspectRatio="none"
				shapeRendering="auto"
			>
				<defs>
					<path
						id="gentle-wave"
						d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
					/>
				</defs>
				<g className="parallax">
					<use xlinkHref="#gentle-wave" x="48" y="0" fill="#E30044" />
					<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,17,88,1)" />
					<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,36,102,1)" />
					<use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(255,66,122,1)" />
				</g>
			</svg>
		</div>
		<div className="box w-100 h-100 f-r-ce-ce">
			<ul className="social f-r-ce-ce">
				{ mappedSocial }
			</ul>
		</div>
	</div>
);

export default Waves;
