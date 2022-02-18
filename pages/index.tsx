import React, { Fragment } from "react";
import Heading from "components/Heading";
import Navigation from "components/Navigation/Navigation";
import Cover from "components/Cover/Cover";
import Footer from "components/Footer/Footer";
import Services from "components/Services";
import Categories from "components/Categories";

/*
	Home page
*/

const HomePage = (): JSX.Element => (
	<Fragment>
		<Heading
			title="Acheter une machine à coudre Singer France"
			description="Achetez des produits Singer France ou profitez de divers services."
			image="/assets/representation.jpg"
		/>
		<main className="w-100">
			<Navigation />
			<Cover />
			<Services />
			<Categories />
			<Footer />
		</main>
	</Fragment>
);

export default HomePage;
