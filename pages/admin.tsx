import React from "react";
import Page from "components/Page";
import BackOffice from "components/BackOffice/BackOffice";

/*
	Back Office page
*/

const BackOfficePage = (): JSX.Element => (
	<Page
		title="Admnistration Singer"
		description="Admnistrez vos contacts et contenus avec le backoffice de Singer."
		image="cover.jpg"
		admin
	>
		<BackOffice />
	</Page>
);

export default BackOfficePage;
