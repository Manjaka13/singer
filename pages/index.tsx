import React, { Fragment } from "react";
import Heading from "components/Heading";
import Navigation from "components/Navigation/Navigation";
import Footer from "components/Footer/Footer";

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
			<Navigation />
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
