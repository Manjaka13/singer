import React, { Fragment } from "react";
import Heading from "components/Heading";
import Navigation from "components/Navigation/Navigation";
import Cover from "components/Cover/Cover";
import Footer from "components/Footer/Footer";
import Services from "components/Services";
import Categories from "components/Categories";
import Mercerie from "components/Mercerie";
import Promotion from "components/Promotion";

/*
	Home page
*/

const HomePage = (): JSX.Element => (
	<Fragment>
		<Heading
			title="Aventure Couture concenssionnaire SINGER"
			description="Achetez des produits Aventure Couture et profitez de divers services."
			image="/assets/representation.png"
		/>
		<main className="w-100">
			<Navigation />
			<Cover />
			<Promotion />
			<Categories />
			<Mercerie />
			<Services />
			<Footer />
		</main>
	</Fragment>
);

export default HomePage;
