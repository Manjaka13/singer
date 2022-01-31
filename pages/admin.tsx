import React from "react";
import Page from "components/Page";
import NavbarAdmin from "components/BackOffice/NavbarAdmin";
import PageListAccounts from "components/BackOffice/PageListAccounts";

/*
	Admnistration page
*/

const LoginPage = (): JSX.Element => (
	<Page
		title="Admnistration Singer"
		description="Admnistrez vos contacts et contenus avec le backoffice de Singer."
		image="cover.jpg"
		admin
	>
		<React.Fragment>
			<div className="w-100 h-100 o-h f-r-st-st">
				<NavbarAdmin />
				<PageListAccounts />
			</div>
		</React.Fragment>
	</Page>
);

export default LoginPage;
