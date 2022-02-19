import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { Slide } from "react-slideshow-image";
import { SLIDE_MERCERIE } from "helpers/const";
import { IMercerie } from "helpers/interface";

/*
	Mercerie et Accessoires section
*/

const mappedSlide = SLIDE_MERCERIE.map((slide: IMercerie) => (
	<div className="each-slide" key={ uuidv4() }>
		<div className="w-100 h-100 p-n n-s">
			<div
				className="w-100 h-50 f-c-ce-ce"
				style={{
					background: `url(${slide.image}) center center no-repeat`,
					backgroundSize: "cover"
				}}
			>
				<p className="slide-title pd-5 br-5 white fs-170">
					{ slide.name }
				</p>
			</div>
			<p className="white pd-10 tx-j">
				{ slide.description }
			</p>
		</div>
	</div>
));

const Mercerie = (): JSX.Element => (
	<div id="mercerie" className="mercerie w-100">
		<div className="mercerie__bg w-100 o-h">
			<div className="mercerie__overlay w-100 h-100">
				<div className="container h-100">
					<div className="w-100 h-100 f-c-st-st">
						<h2 className="mercerie__title tx-c white pd-20 fs-300 w-100">
							<Icon icon={ ["fas", "wrench"] } /> Mercerie et Accessoires
						</h2>
						<div className="mercerie__separator w-60 h-5px br-5 bg-t mg-a"></div>
						<div className="mercerie__content f-r-be-ce mg-t-20 mg-b-20">
							<div className="mercerie__item o-h h-100">
								<ul className="f-r-be-ce pd-t-20 pd-b-20 w-70 mg-a">
									<li className="f-c-ce-st">
										<div className="about w-80px h-80px br-r o-h tr-200 p f-c-ce-ce white fs-200">
											<Icon icon={ ["fas", "wrench"] } />
										</div>
										<p className="white b">Mercerie</p>
									</li>
									<li className="f-c-ce-st">
										<div className="about w-80px h-80px br-r o-h tr-200 p f-c-ce-ce white fs-200">
											<Icon icon={ ["fas", "star"] } />
										</div>
										<p className="white b">Accessoires</p>
									</li>
									<li className="f-c-ce-st">
										<div className="about w-80px h-80px br-r o-h tr-200 p f-c-ce-ce white fs-200">
											<Icon icon={ ["fas", "cogs"] } />
										</div>
										<p className="white b">Autres</p>
									</li>
									<li className="f-c-ce-st">
										<div className="about w-80px h-80px br-r o-h tr-200 p f-c-ce-ce white fs-200">
											<Icon icon={ ["fas", "envelope"] } />
										</div>
										<p className="white b">Contacter</p>
									</li>
								</ul>
								<p className="text pd-20 br-5 white">
									Integer ultrices blandit tellus rhoncus ultricies. Donec facilisis diam mauris, et feugiat magna laoreet in. Sed nec quam ante. Nulla ut turpis et tellus vehicula pellentesque vitae eget turpis. Vivamus auctor mi sit amet ex lobortis, eu euismod arcu consequat. Nulla eget est eget turpis bibendum viverra. Suspendisse ac tortor augue. Nam eget finibus leo. Phasellus et finibus enim. Curabitur eget quam rhoncus, lacinia quam gravida, convallis nibh. 
								</p>
								
								{/*<p className="tx-c">
									<button className="button">
										<Icon icon={ ["fas", "envelope"] } /> Nous contacter
									</button>
								</p>*/}
							</div>
							<div className="slide o-h h-100 br-5">
								<Slide easing="ease">{ mappedSlide }</Slide>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Mercerie;