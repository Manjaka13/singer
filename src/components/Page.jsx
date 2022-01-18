import React, { useState } from "react";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Footer from "./Footer";
import Cover from "./Cover";
import Type from "./Type";
import Produits from "./Produits";

/*
	Page layout
*/

const Page = ({ children }) => {
	const [menuOpened, setMenuOpened] = useState(false);
	const toggleMenu = () => setMenuOpened(!menuOpened);

	return (
		<main>
			<Navbar atTrigger={toggleMenu} />
			<Menu opened={menuOpened} atClose={toggleMenu} />
			<div className="page w-100 o-scroll">
				<Cover />
				<Type />
				<Produits />
				{children}
				<Footer />
			</div>
		</main>
	);
};

export default Page;
