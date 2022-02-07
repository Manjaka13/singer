import React from "react";
import { v4 as uuidv4 } from "uuid";
import { IServiceItem } from "helpers/interface";
import { Slide } from "react-slideshow-image";

const slides: Array<string> = [
	"/cover-slide/slide1.jpg",
	"/cover-slide/slide2.jpg",
	"/cover-slide/slide3.jpg",
];

const service: Array<IServiceItem> = [
	{
		title: "Réparation de machines à coudres",
		content:
			"Proin porta iaculis purus, et congue nibh placerat eu. Mauris interdum lectus aliquet erat tincidunt suscipit ultricies eget purus. Nulla mattis orci eget iaculis pharetra.",
	},
	{
		title: "Reprise de vielles modèles",
		content:
			"Donec faucibus euismod quam. Curabitur eros enim, venenatis eget mi at, elementum commodo urna. Etiam non facilisis erat. Quisque quis finibus nisi, eget vehicula ipsum.",
	},
	{
		title: "Achat de pièces détachées",
		content:
			"Nulla ut turpis et tellus vehicula pellentesque vitae eget turpis. Vivamus auctor mi sit amet ex lobortis, eu euismod arcu consequat. Nulla eget est eget turpis bibendum viverra",
	},
];

const mappedSlide = slides.map((item: string, key: number) => (
	<div className="each-slide" key={uuidv4()}>
		<div
			className="f-c-ce-en p-n n-s"
			style={{
				background: `url(${item}) center center no-repeat`,
				backgroundSize: "cover",
			}}
		>
			<div className="slide__item w-80 pd-10 br-10 mg-b-20">
				<h3 className="bg-theme white br-5 pd-10 w-a mg-l-10">
					{service[key].title}
				</h3>
				<p className="white pd-10 tx-j">{service[key].content}</p>
			</div>
		</div>
	</div>
));

const Service = (): JSX.Element => (
	<section className="service pt-40 pb-20">
		<div className="ctn pd-t-40">
			<div className="f-r-st-ce pd-b-20">
				<div className="bg-theme mg-r-15 w-5px h-40px br-5"></div>
				<h2 className="fs-250">Nos offres et services</h2>
			</div>
			{/* <p className="tx-j">
				Suspendisse pellentesque vehicula nulla vel faucibus. Nullam hendrerit augue
				in dapibus eleifend. Nullam aliquet luctus posuere. Morbi ornare porttitor
				sodales. In luctus feugiat malesuada. Phasellus consectetur nec ligula vitae
				commodo. Praesent sodales lacinia facilisis. Quisque id ligula vitae turpis
				blandit ullamcorper.
			</p> */}
			<div className="service__tab f-r-be-st f-w w-100 h-400px mg-t-20">
				<div className="item slide h-100 bg-white b-b">
					<Slide easing="ease">{mappedSlide}</Slide>
				</div>
				<div className="item h-100 f-c-ce-be">
					<div className="little bg-white b-b w-100">
						<div className="pd-10">
							<h3>Expertise</h3>
							<div className="w-50 h-5px bg-theme br-5 mg-t-10 mg-b-10"></div>
							<p className="tx-j">
								Les machines à coudre n’ayant pas toutes la même puissance moteur, les
								mêmes programmes, les mêmes possibilités, nous vous aiderons dans le
								choix de la machine à coudre adaptée à vos besoins. Pour cela, nous
								prendrons le temps de voir avec vous, tous ce que vous envisagez de
								faire à court terme et à long terme avec votre machine. Afin de vous
								proposer la machine à coudre qui deviendra votre meilleur amie pour
								toute vos envies couture !
							</p>
						</div>
					</div>
					<div className="little bg-white b-b w-100">
						<div className="pd-10">
							<h3>Professionalisme</h3>
							<div className="w-50 h-5px bg-theme br-5 mg-t-10 mg-b-10"></div>
							<p className="tx-j">
								Dans notre magasin , pour les machines achetées chez nous, les cours de
								prises en main, et toutes les questions en relation avec votre machine
								sont gratuits et à volontés.
							</p>
							<br />
							<p className="tx-j">
								Vous pourrez ainsi tout savoir sur le fonctionnement de votre machine,
								canette, enfilage, utilisations des accessoires, et comment entretenir
								votre machine.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Service;
