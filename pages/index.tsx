import React, { Fragment } from "react";
import Heading from "components/Heading";
import Navbar from "components/Navigation/Navbar";

/*
	Home page
*/

const HomePage = (): JSX.Element => (
	<Fragment>
		<Heading
			title="Acheter une machine à coudre Singer France"
			description="Achetez des produits Singer France ou profitez de divers services."
			image="cover.jpg"
		/>
		<main className="w-100">
			<Navbar />
			<h2>Welcome to NextJS</h2>
		</main>
	</Fragment>
);

export default HomePage;
