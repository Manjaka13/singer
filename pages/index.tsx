import React from "react";
import Page from "components/Page";
import Cover from "components/Cover";
import TypeMachine from "components/TypeMachine";
import Footer from "components/Footer";
import ProductList from "components/ProductList";
import Service from "components/Service";

/*
	Home page
*/

const HomePage = (): JSX.Element => (
	<Page
		title="Acheter une machine à coudre Singer France"
		description="Achetez des produits Singer France ou profitez de divers services."
		image="cover.jpg"
	>
		<React.Fragment>
			<Cover />
			<Service />
			<TypeMachine />
			<ProductList />
			<Footer />
		</React.Fragment>
	</Page>
);

export default HomePage;
