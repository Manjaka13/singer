import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { INavbarAdminItem } from "helpers/interface";
import NavbarAdminItem from "components/BackOffice/NavbarAdminItem";

const sections: Array<INavbarAdminItem> = [
	{
		icon: ['fas', 'user'],
		content: "Manjaka"
	},
	{
		icon: ['fas', 'key'],
		content: "Comptes admnistrateurs"
	},
	{
		icon: ['fas', 'pencil-alt'],
		content: "Rédiger newsletter"
	},
	{
		icon: ['fas', 'envelope'],
		content: "Liste des contacts"
	},
	{
		icon: ['fas', 'shopping-cart'],
		content: "Gestion des produits"
	},
	{
		icon: ['fas', 'wrench'],
		content: "Autres paramètres"
	},
];

const NavbarAdmin = (): JSX.Element => {
	const [selectedSection, setSelectedSection] = useState<number>(0);
	const selectSection = (id: number) => selectedSection != id && setSelectedSection(id);

	const mappedSection: Array<JSX.Element> = sections.map((item: INavbarAdminItem, key: number) => (
		<NavbarAdminItem
			id={key}
			section={item}
			atClick={selectSection}
			key={uuidv4()}
			active={key === selectedSection}
		/>
	));

	return (
		<div className="navbar-admin h-100 f-c-ce-ce bg-theme">
			<div className="navbar-admin__container h-100 mg-20">
				<div className="w-100 f-r-st-ce">
					<img className="h-40px mg-r-10" src="/singer.png" alt="Singer logo" />
					<img className="h-40px" src="/singer-text.png" alt="Singer text logo" />
				</div>
				<div className="navbar-admin__separator w-100 bg-white mg-t-20 br-5"></div>
				<ul className="pd-t-20 pd-b-20">
					{mappedSection}
				</ul>
			</div>
		</div>
	);
};

export default NavbarAdmin;