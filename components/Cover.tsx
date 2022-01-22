import React, { useState, useEffect } from "react";
import Waves from "components/Waves";
import { IPromotionSlide } from "helpers/interface";
import { Slide } from "react-slideshow-image";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faShoppingCart } from "@fortawesome/free-solid-svg-icons";


library.add(faStar, faShoppingCart);

const months: Array<string> = [
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
	"Décembre",
];

const machines: Array<IPromotionSlide> = [
	{
		name: "SUPERA 5523",
		type: "Machine à coudre mécanique"
	},
	{
		name: "M2105",
		type: "Machine à coudre mécanique"
	},
	{
		name: "S0705",
		type: "Surjeteuse"
	}
];

const mappedSlide: Array<JSX.Element> = machines.map((item: IPromotionSlide) => (
	<div className="each-slide" key={ uuidv4() }>
		<div
			className="f-c-st-st n-s"
			style={{
				"background": `url(fake-machine.jpg) center center no-repeat`, "backgroundSize": "cover"
			}}
		>
			<div className="w-70 machine-info pd-10 br-5 f-r-be-ce">
				<div className="info">
					<h3 className="white fs-100 mg-b-5">
						{ item.name }
					</h3>
					<p className="white fs-80">{ item.type }</p>
				</div>
				<div
					className="details w-30px h-30px bg-theme mg-r-10 br f-r-ce-ce p tr-200"
					title="Détails"
				>
					<Icon className="white" icon={ ['fas', 'shopping-cart'] } />
				</div>
			</div>
		</div>
	</div>
));

const Cover = (): JSX.Element => {
	const [currentService, setCurrentService] = useState<number>(0);
	const services: Array<string> = ["services", "promotions", "produits"];

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentService((prevState) =>
				prevState + 1 < services.length ? prevState + 1 : 0
			);
		}, 1500);
		return () => clearInterval(timer);
	}, []);

	const mappedServices: Array<JSX.Element> = services.map(
		(item: string, key: number) => (
			<span
				className={
					(key === currentService
						? "cover__item cover__item--show"
						: "cover__item") + " w-100 h-100 o-h f-r-ce-ce tr-400"
				}
				key={uuidv4()}
			>
				{item}
			</span>
		)
	);

	return (
		<div className="cover o-h">
			<div className="cover__overlay h-80 o-h">
				<div className="ctn h-100 f-r-be-st">
					<div className="w-60 w-sm-100 h-100 f-c-ce-ce">
						<div className="h-auto w-100">
							<h2 className="cover__title white mg-b-20">
								Chez Singer, profitez de divers{" "}
								<span className="cover__service mg-0 pd-0 br-20 o-h">
									{mappedServices}
								</span>
							</h2>
							<div className="cover__separator w-100 mg-b-20"></div>
							<p className="cover__about white pd-20 br-10 tx-j">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam magna dui,
								blandit eget malesuada sit amet, dapibus bibendum nibh. Vestibulum ante
								ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae..
							</p>
						</div>
					</div>
					<div className="cover__prom w-40 h-100 w-sm-0 f-r-en-ce">
						<div className="cover__promotion f-c-in-in bg-white br-10 o-h">
							<div className="w-100 f-r-be-ce">
								<h2 className="pd-10">Promotions</h2>
								<p className="bold gold pd-10">
									<Icon className="star" icon={["fas", "star"]} />{" "}
									{months[new Date().getMonth()]}
								</p>
							</div>
							<div className="divider mg-a"></div>
							<p className="pd-10 tx-j">
								Quisque pellentesque in sem at commodo. Nulla ut quam maximus, rutrum
								neque ut, interdum est. Praesent in euismod nunc. Ut vel lorem a velit
								venenatis convallis mollis eu nisi !
							</p>
							<div className="cover__slide o-h">
								<Slide easing="ease">
									{ mappedSlide }
								</Slide>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="cover__bottom h-20">
				<Waves />
			</div>
		</div>
	);
};

export default Cover;
