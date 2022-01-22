import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { IMenuProps, IMenuItem } from "helpers/interface";
// import Button from "components/Button";
import {
	faUser,
	faLock,
	faStar,
	faWrench,
	faShoppingCart,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

/*
	Navbar menu
*/

library.add(
	faUser,
	faLock,
	faStar,
	faWrench,
	faShoppingCart,
	faEnvelope,
	faFacebook,
	faInstagram
);

const menuList: Array<IMenuItem> = [
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

const mappedMenu: Array<JSX.Element> = menuList.map((item: IMenuItem) => (
	<li className="menu__item" key={uuidv4()}>
		<a
			className="menu__link b pd-10 br-5"
			href={item.link}
			title={item.title}
		>
			<Icon icon={item.icon} /> {item.name}
		</a>
		<div className="menu__underline bg-theme tr-200 mg-a w-0 h-5px"></div>
	</li>
));

const Menu: React.FC<IMenuProps> = ({ opened, atClose }): JSX.Element => {
	const delayedClose = () => {
		if (typeof atClose === "function") setTimeout(() => atClose(), 100);
	};

	return (
		<div
			className={(opened ? "menu" : "menu menu--hidden") + " w-100 tr-100"}
			onClick={delayedClose}
		>
			<div className="menu__content bg-white pd-t-20 pd-b-20">
				<div className="ctn">
					<div className="w-100 f-r-be-ce">
						<div className="menu__title w-40 w-md-30">
							<h1 className="menu__name">
								Singer<span className="menu__chantepie"> Chantepie</span>
							</h1>
						</div>
						<div className="menu__login w-60 w-md-70 f-r-en-ce">
							<ul className="f-r-ce-ce">
								<li>
									<a className="theme fs-200" href="#0" title="Visiter notre page Facebook">
										<Icon icon={["fab", "facebook"]} />
									</a>
								</li>
								<li className="mg-l-20">
									<a className="theme fs-200" href="#0" title="Suivez nous sur insta !">
										<Icon icon={["fab", "instagram"]} />
									</a>
								</li>
								<li className="mg-l-20">
									<a className="theme fs-200" href="#0" title="Contactez-nous par mail">
										<Icon icon={["fas", "envelope"]} />
									</a>
								</li>
							</ul>

							{/*<Button
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
							</Button>*/}
						</div>
					</div>
					<div className="menu__separator w-100 mg-t-20 mg-b-20"></div>
					<ul className="menu__list f-r-be-ce mg-a w-60">
						{mappedMenu}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Menu;
