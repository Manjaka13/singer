import React, { useState } from "react";
import Router from "next/router";
import NavbarAdmin from "components/BackOffice/NavbarAdmin";
import { INavbarAdminItem } from "helpers/interface";
import PageUser from "components/BackOffice/PageUser";
import PageListAccounts from "components/BackOffice/PageListAccounts";
import PageListContacts from "components/BackOffice/PageListContacts";
import { useAuth } from "hooks/";

/*
	BackOffice page component
*/

// Back Office section list
const sections: Array<INavbarAdminItem> = [
	{
		icon: ['fas', 'user'],
		content: "Admnistrateur"
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

const BackOffice = (): JSX.Element => {
	const {user} = useAuth();
	let displayedPage = (<PageUser />);
	const [selectedSection, setSelectedSection] = useState<number>(0);
	const selectSection = (id: number) => selectedSection != id && setSelectedSection(id);		
	
	// If not logged in
	if(!user)
		Router.push("/login");
	// If logged in
	else {
		sections[0].content = user.name;
		// Select B.O page to display
		if(selectedSection === 1)
			displayedPage = (<PageListAccounts />);
		else if(selectedSection === 3)
			displayedPage = (<PageListContacts />);
	}

	return !user ? <React.Fragment></React.Fragment> : (
		<div className="w-100 h-100 o-h f-r-st-st">
			<NavbarAdmin
				sections={sections}
				selectedSection={selectedSection}
				selectSection={selectSection}
			/>
			{displayedPage}
		</div>
	);
};

export default BackOffice;