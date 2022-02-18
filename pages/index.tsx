import React, { Fragment } from "react";
import Heading from "components/Heading";
import Navigation from "components/Navigation/Navigation";
import Cover from "components/Cover/Cover";
import Footer from "components/Footer/Footer";
import Services from "components/Services";

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
			<h2 className="pd-t-100">Welcome to NextJS</h2>
			<h2 className="pd-t-100">Welcome to NextJS</h2>
			<h2 className="pd-t-100">Welcome to NextJS</h2>
			<h2 className="pd-t-100">Welcome to NextJS</h2>
			<h2 className="pd-t-100">Welcome to NextJS</h2>
			<h2 className="pd-t-100">Welcome to NextJS</h2>
			<h2 className="pd-t-100">Welcome to NextJS</h2>
			<h2 className="pd-t-100">Welcome to NextJS</h2>
			<h2 className="pd-t-100">Welcome to NextJS</h2>
			<h2 className="pd-t-100">Welcome to NextJS</h2>
			<h2 className="pd-t-100">Welcome to NextJS</h2>
			<h2 className="pd-t-100">Welcome to NextJS</h2>
			<h2 className="pd-t-100">Welcome to NextJS</h2>
			<h2 className="pd-t-100">Welcome to NextJS LAST</h2>
			<Footer />
		</main>
	</Fragment>
);

export default HomePage;
