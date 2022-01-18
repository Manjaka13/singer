import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faStar } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

library.add(
	faFacebook,
	faInstagram,
	faEnvelope,
	faStar
);

const months = [
	"Janvier",
	"Février",
	"Mars",
	"Avril",
	"Mai",
	"Juin",
	"Juillet",
	"Août",
	"Septembre",
	"Novembre",
	"Décembre"
];

const Cover = () => {
	const [currentService, setCurrentService] = useState(0);
	const services = ["services", "promotions", "produits"];

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentService(prevState => prevState + 1 < services.length ? prevState + 1 : 0);
		}, 1500);
		return () => clearInterval(timer);
	}, []);

	const mappedServices = services.map((item, key) => (
		<span
			className={(key === currentService ? 'cover__item cover__item--show' : 'cover__item') + " w-100 h-100 o-hidden d-flex f-center"}
			key={uuidv4()}
		>
			{item}
		</span>
	));

	return (
		<div className="cover col-10 o-hidden">
			<div className="col-8 bg-hex00000099 o-hidden">
				<div className="ctn h-100">
					<div className="row-xlg-6 row-sm-10 f-center">
						<div className="col-auto w-100">
							<h2 className="cover__title mb-20">Chez Singer, profitez de divers <span className="cover__service br-20 o-hidden">{mappedServices}</span></h2>
							<div className="cover__separator w-100 bg-theme mb-20"></div>
							<p className="prg white ctn-20-20 bg-hex00000099 br-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam magna dui, blandit eget malesuada sit amet, dapibus bibendum nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae..</p>
						</div>
					</div>
					<div className="d-flex cover__prom row-xlg-4 row-sm-0">
						<div className="cover__promotion bg-white br-10 o-hidden">
							<div className="row-10 f-center">
								<div className="row-6">
									<h2 className="ctn-10-10">Promotions</h2>
								</div>
								<div className="row-xlg-4 row-sm-0 f-end">
									<p className="prg bold gold ctn-10-10">
										<Icon className="star" icon={['fas', 'star']} /> {months[new Date().getMonth()]}
									</p>
								</div>
							</div>
							<div className="divider"></div>
							<p className="prg ctn-10-10">Quisque pellentesque in sem at commodo. Nulla ut quam maximus, rutrum neque ut, interdum est. Praesent in euismod nunc. Ut vel lorem a velit venenatis convallis mollis eu nisi !</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col-2 bg-hex00000099">
				<div className="header">
					<div className="header__content">
						<svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
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
					<div className="content w-100 h-100 d-flex f-center">
						<ul className="social d-flex">
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
			</div>
		</div>
	);
}

export default Cover;