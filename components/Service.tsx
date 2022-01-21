import React from "react";
import { v4 as uuidv4 } from "uuid";
import { IServiceItem } from "helpers/interface";
import { Slide } from "react-slideshow-image";

const slides: Array<string> = [
	"/cover-slide/slide1.jpg",
	"/cover-slide/slide2.jpg",
	"/cover-slide/slide3.jpg"
];

const service: Array<IServiceItem> = [
	{
		title: "Réparation de machines à coudres",
		content: "Proin porta iaculis purus, et congue nibh placerat eu. Mauris interdum lectus aliquet erat tincidunt suscipit ultricies eget purus. Nulla mattis orci eget iaculis pharetra.",
	},
	{
		title: "Reprise de vielles modèles",
		content: "Donec faucibus euismod quam. Curabitur eros enim, venenatis eget mi at, elementum commodo urna. Etiam non facilisis erat. Quisque quis finibus nisi, eget vehicula ipsum.",
	},
	{
		title: "Achat de pièces détachées",
		content: "Nulla ut turpis et tellus vehicula pellentesque vitae eget turpis. Vivamus auctor mi sit amet ex lobortis, eu euismod arcu consequat. Nulla eget est eget turpis bibendum viverra",
	}
];

const Service = (): JSX.Element => {
	const mappedSlide = slides.map((item: string, key: number) => (
		<div className="each-slide" key={ uuidv4() }>
			<div
				className="f-col-center-end pointer-none no-select"
				style={{"background": `url(${item}) center center no-repeat`, "backgroundSize": "cover"}}
			>
				<div className="slide__item w-80 pd-10 br-10 mg-bottom-20">
					<h3 className="bg-theme white br-5 pd-10 w-auto mg-left-10">{ service[key].title }</h3>
					<p className="white pd-10 tx-justify">{ service[key].content }</p>
				</div>
			</div>
		</div>
	));

	return (
		<section className="service pt-40 pb-20">
			<div className="ctn pd-top-40">
				<div className="f-row-start-center pd-bottom-20">
					<div className="bg-theme mg-right-15 w-5px h-40px br-5"></div>
					<h2 className="fs-250">Nos offres et services</h2>
				</div>
				<p className="tx-justify">
					Suspendisse pellentesque vehicula nulla vel faucibus. Nullam hendrerit
					augue in dapibus eleifend. Nullam aliquet luctus posuere. Morbi ornare
					porttitor sodales. In luctus feugiat malesuada. Phasellus consectetur nec
					ligula vitae commodo. Praesent sodales lacinia facilisis. Quisque id ligula
					vitae turpis blandit ullamcorper.
				</p>
				<div className="service__tab f-row-between-start f-wrap w-100 h-400px mg-top-20">
					<div className="item slide h-100 bg-white border">
						<Slide easing="ease">
							{ mappedSlide }
						</Slide>
					</div>
					<div className="item h-100 f-col-center-between">
						<div className="little bg-white border w-100">
							<div className="pd-10">
								<h3>Expertise</h3>
								<div className="w-50 h-5px bg-theme br-5 mg-top-10 mg-bottom-10"></div>
								<p className="tx-justify">Proin porta iaculis purus, et congue nibh placerat eu. Nullam aliquet luctus posuere. Morbi ornare porttitor sodales. Mauris interdum lectus aliquet erat tincidunt suscipit ultricies eget purus. Nulla mattis orci eget iaculis pharetra.</p>
							</div>
						</div>
						<div className="little bg-white border w-100">
							<div className="pd-10">
								<h3>Professionalisme</h3>
								<div className="w-50 h-5px bg-theme br-5 mg-top-10 mg-bottom-10"></div>
								<p className="tx-justify">Suspendisse pellentesque vehicula nulla vel faucibus. Nullam hendrerit augue in dapibus eleifend. Nulla mattis orci eget iaculis pharetra. Nullam aliquet luctus posuere. Morbi ornare porttitor sodales.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Service;