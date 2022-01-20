import React, { useState } from "react";
import Page from "components/Page";
import Navbar from "components/Navbar";
import Menu from "components/Menu";

/*
	Home page
*/

const HomePage = (): JSX.Element => {
	const [menuOpened, setMenuOpened] = useState(false);
	const toggleMenu = () => setMenuOpened(!menuOpened);

	return (
		<Page
			title="Acheter une machine à coudre Singer France"
			description="Achetez des produits Singer France ou profitez de divers services."
			image="cover.jpg"
		>
			<React.Fragment>
				<Navbar atTrigger={toggleMenu} />
				<Menu opened={menuOpened} atClose={toggleMenu} />
			</React.Fragment>
		</Page>
	);
};

export default HomePage;
