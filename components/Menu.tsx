import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { IMenuProps, IMenuItem } from "helpers/interface";
import Button from "components/Button";
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

library.add(
	faUser,
	faLock,
	faStar,
	faWrench,
	faShoppingCart,
	faEnvelope
);

const menuList: Array<IMenuItem> = [
	{
		name: "Nos promotions",
		icon: ['fas', 'star'],
		title: "Profitez de nos dernières promotions de Singer",
		link: "#promotions"
	},
	{
		name: "Offres et services",
		icon: ['fas', 'wrench'],
		title: "Découvrez les services offerts chez Singer",
		link: "#services"
	},
	{
		name: "Nos produits",
		icon: ['fas', 'shopping-cart'],
		title: "Les articles et produits en vente chez Singer",
		link: "#produits"
	},
	{
		name: "Contacts",
		icon: ['fas', 'envelope'],
		title: "Nous joindre",
		link: "#contacts"
	}
];

const Menu: React.FC<IMenuProps> = ({ opened, atClose }): JSX.Element => {
	const mappedMenu: Array<JSX.Element> = menuList.map((item: IMenuItem) => (
		<li className="menu__item" key={uuidv4()}>
			<a
				className="menu__link bold pd-10 br-5"
				href={item.link}
				title={item.title}
			>
				<Icon icon={item.icon} /> {item.name}
			</a>
			<div className="menu__underline tr-200 mg-auto w-0 h-5px"></div>
		</li>
	));

	const delayedClose = () => {
		if(typeof atClose === "function")
			setTimeout(() => atClose(), 100);
	};

	return (
		<div
			className={(opened ? "menu" : "menu menu--hidden") + " w-100 tr-100"}
			onClick={delayedClose}
		>
			<div className="menu__content bg-white pd-top-20 pd-bottom-20">
				<div className="ctn">
					<div className="w-100 f-row-between-center">
						<div className="menu__title w-40 w-md-30">
							<h1 className="menu__name">
								Singer<span className="menu__chantepie"> Chantepie</span>
							</h1>
						</div>
						<div className="menu__login w-60 w-md-70 f-row-end-center">
							<Button
								title="Connexion au compte admnistrateur"
								className="mg-right-20"
								alt
							>
								<React.Fragment>
									<Icon icon={["fas", "lock"]} /> Se connecter
								</React.Fragment>
							</Button>
							<Button title="S'inscrire à un compte admnistrateur">
								<React.Fragment>
									<Icon icon={["fas", "user"]} /> Inscription
								</React.Fragment>
							</Button>
						</div>
					</div>
					<div className="menu__separator w-100 mg-top-20 mg-bottom-20"></div>
					<ul className="menu__list f-row-between-center mg-auto w-60">{mappedMenu}</ul>
				</div>
			</div>
		</div>
	);
};

export default Menu;
