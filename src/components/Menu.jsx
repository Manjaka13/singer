import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faUser,
	faLock,
	faStar,
	faWrench,
	faShoppingCart,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

/*
	Navbar menu
*/

library.add(faUser, faLock, faStar, faWrench, faShoppingCart, faEnvelope);

const menuList = [
	{
		name: "Nos promotions",
		icon: ["fas", "star"],
		title: "Profitez de nos dernières promotions de Singer",
		link: "#promotions",
	},
	{
		name: "Offres et services",
		icon: ["fas", "wrench"],
		title: "Découvrez les services offerts chez Singer",
		link: "#services",
	},
	{
		name: "Nos produits",
		icon: ["fas", "shopping-cart"],
		title: "Les articles et produits en vente chez Singer",
		link: "#produits",
	},
	{
		name: "Contacts",
		icon: ["fas", "envelope"],
		title: "Nous joindre",
		link: "#contacts",
	},
];

const Menu = ({ opened, atClose }) => {
	const mappedMenu = menuList.map((item) => (
		<li className="menu__item" key={uuidv4()}>
			<a
				className="menu__link bold ctn-10-10 br-5"
				href={item.link}
				title={item.title}
			>
				<Icon icon={item.icon} /> {item.name}
			</a>
			<div className="menu__underline"></div>
		</li>
	));

	const delayedClose = () => {
		setTimeout(() => atClose(), 100);
	};

	return (
		<div
			className={(opened ? "menu" : "menu menu--hidden") + " w-100 bg-hexffffff99"}
			onClick={delayedClose}
		>
			<div className="menu__content bg-white ctn-20-0">
				<div className="ctn">
					<div className="row-10">
						<div className="row-xlg-4 row-sm-3 row-xsm-0">
							<h1 className="menu__name">
								Singer<span className="menu__chantepie"> Chantepie</span>
							</h1>
						</div>
						<div className="row-xlg-6 row-sm-7 row-xsm-10 f-end menu__login">
							<button
								className="btn-alt mr-20"
								title="Connexion au compte admnistrateur"
							>
								<Icon icon={["fas", "lock"]} /> Se connecter
							</button>
							<button className="btn" title="S'inscrire à un compte admnistrateur">
								<Icon icon={["fas", "user"]} /> Inscription
							</button>
						</div>
					</div>
				</div>
				<div className="ctn">
					<div className="menu__separator row-10 mt-20 mb-20"></div>
				</div>
				<div className="ctn">
					<ul className="menu__list">{mappedMenu}</ul>
				</div>
			</div>
		</div>
	);
};

export default Menu;
