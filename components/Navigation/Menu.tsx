import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { ISocial, ISection } from "helpers/interface";
import { SOCIAL, SECTION } from "helpers/const";

/*
	Menu
*/

const Menu = ({
	opened = false,
	close = null
}): JSX.Element => {

	const mappedSocial = SOCIAL.map((social: ISocial) => (
		<li className="mg-l-20" key={ uuidv4() }>
			<a
				className="fs-200 t"
				href={ social.link }
				title={ social.title }
			>
				<Icon icon={ social.icon } />
			</a>
		</li>
	));

	const mappedSection = SECTION.map((section: ISection) => (
		<li className="menu__item" key={ uuidv4() }>
			<a
				className="menu__link b tr-200 pd-t-10 pd-b-10"
				href={ section.link }
				title={ section.title }
			>
				<Icon icon={ section.icon } /> { section.name }
			</a>
			<div className="menu__underline bg-t tr-200"></div>
		</li>
	));

	return (
		<div
			className={ `menu ${opened ? "menu--opened" : ""} tr-200` }
			onClick={ () => typeof close === "function" ? close() : null }
		>
			<div className="menu__overlay w-100 h-100 tr-200"></div>
			<div className="menu__content w-100 tr-200 bg-white">
				<div className="container">
					<div className="w-100 f-c-st-st">
						<div className="w-100 f-r-be-ce pd-t-20 pd-b-20">
							<h1 className="fs-200">Singer Chantepie</h1>
							<ul className="f-r-st-ce">
								{ mappedSocial }
							</ul>
						</div>
						<div className="menu__separator w-100 mg-b-10"></div>
						<ul className="w-70 f-r-be-ce mg-a pd-b-10">
							{ mappedSection }
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Menu;