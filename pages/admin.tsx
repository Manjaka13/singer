import React, { useState, useEffect } from "react";
import Router from "next/router";
import Page from "components/Page";
import { INavbarAdminItem } from "helpers/interface";
import NavbarAdmin from "components/BackOffice/NavbarAdmin";
import PageUser from "components/BackOffice/PageUser";
import PageListAccounts from "components/BackOffice/PageListAccounts";
import PageListContacts from "components/BackOffice/PageListContacts";
import Session from "helpers/session";

/*
	Admnistration page
*/

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

const LoginPage = (): JSX.Element => {
	const [pageLoaded, setPageLoaded] = useState<boolean>(false);
	const [selectedSection, setSelectedSection] = useState<number>(0);
	const selectSection = (id: number) => selectedSection != id && setSelectedSection(id);
	let displayedPage = (<PageUser />);

	if(selectedSection === 1)
		displayedPage = (<PageListAccounts />);
	else if(selectedSection === 3)
		displayedPage = (<PageListContacts />);

	useEffect(() => {
		if(!Session.get("user"))
			Router.push("/login");
		else
			setPageLoaded(true);
	}, []);

	return !pageLoaded ? <React.Fragment></React.Fragment> : (
		<Page
			title="Admnistration Singer"
			description="Admnistrez vos contacts et contenus avec le backoffice de Singer."
			image="cover.jpg"
			admin
		>
			<React.Fragment>
				<div className="w-100 h-100 o-h f-r-st-st">
					<NavbarAdmin
						sections={sections}
						selectedSection={selectedSection}
						selectSection={selectSection}
					/>
					{displayedPage}
				</div>
			</React.Fragment>
		</Page>
	);
};

export default LoginPage;
