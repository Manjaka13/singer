import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Slide } from "react-slideshow-image";
import SectionTitle from "components/SectionTitle";
import { SLIDE_SERVICE, SERVICE } from "helpers/const";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

/*
	Service offert section
*/

const mappedSlide = SLIDE_SERVICE.map((slide: string, key: number) => (
	<div className="each-slide" key={uuidv4()}>
		<div
			className="f-c-ce-en p-n n-s"
			style={{
				background: `url(${slide}) center center no-repeat`,
				backgroundSize: "cover",
			}}
		>
			<div className="slide__item w-80 pd-10 br-10 mg-b-20">
				<h3 className="bg-theme white br-5 pd-10 w-a mg-l-10">
					{SERVICE[key].title}
				</h3>
				<p className="white pd-10 tx-j">{SERVICE[key].content}</p>
			</div>
		</div>
	</div>
));

const Services = (): JSX.Element => (
	<div id="services" className="services">
		<div className="container">
			<div className="w-100">
				<SectionTitle icon={["fas", "star"]} title="Nos offres et services" />
				<div className="services__content f-r-be-st w-100">
					<div className="item item--right slide h-100 bg-white">
						<Slide easing="ease">{mappedSlide}</Slide>
					</div>
					<div className="item item--left h-100 f-c-st-be">
						<div className="item-little w-100 b-b o-h bg-white">
							<h3 className="pd-10">Expertise</h3>
							<div className="w-30 h-5px mg-l-10 br-5 bg-t"></div>
							<p className="tx-j pd-10 fs-90">
								Les machines à coudre n&apos;ayant pas toutes la même puissance moteur,
								les mêmes programmes, les mêmes possibilités, nous vous aiderons dans le
								choix de la machine à coudre adaptée à vos besoins. Pour cela, nous
								prendrons le temps de voir avec vous, tous ce que vous envisagez de
								faire à court terme et à long terme avec votre machine. Afin de vous
								proposer la machine à coudre qui deviendra votre meilleur amie pour
								toute vos envies couture !
							</p>
						</div>
						<div className="item-little w-100 b-b o-h bg-white">
							<h3 className="pd-10">Professionalisme</h3>
							<div className="w-30 h-5px mg-l-10 br-5 bg-t"></div>
							<p className="tx-j pd-10 fs-90">
								Dans notre magasin , pour les machines achetées chez nous, les cours de
								prises en main, et toutes les questions en relation avec votre machine
								sont gratuits et à volontés.
								<br />
								Vous pourrez ainsi tout savoir sur le fonctionnement de votre machine,
								canette, enfilage, utilisations des accessoires, et comment entretenir
								votre machine.
							</p>
						</div>
					</div>
				</div>
				<div className="services__pickup">
					<h2 className="title tx-c white pd-t-20 pd-b-20 fs-300 w-100">
						<Icon className="title__icon" icon={["fas", "map-marker-alt"]} /> Nos
						points relais
					</h2>
					<div className="separator w-60 h-5px br-5 bg-t mg-a"></div>
					<p className="tx-j pd-10">
						Vous pouvez également nous laisser vos machines dans les deux points
						relais suivants :
					</p>
					<ul className="relay-list">
						<li className="relay-list__item">
							<Icon className="icon" icon={["fas", "map-marker-alt"]} /> TOOTIM 8 rue
							du maréchal de lattre de tassigny 35580 Guichen
						</li>
						<li className="relay-list__item">
							<Icon className="icon" icon={["fas", "map-marker-alt"]} /> L &apos;espace
							ménager bruzois 35170 Bruz
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
);

export default Services;
