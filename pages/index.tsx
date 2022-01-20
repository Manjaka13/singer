import React from "react";
import Page from "components/Page";
import Navbar from "components/Navbar";

/*
	Home page
*/

const HomePage = (): JSX.Element => {
	return (
		<Page
			title="Acheter une machine à coudre Singer France"
			description="Achetez des produits Singer France ou profitez de divers services."
			image="cover.jpg"
		>
			<Navbar />
		</Page>
	);
};

export default HomePage;
