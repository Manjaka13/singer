import React, { useState } from "react";
import Heading from "components/Heading";
import Navbar from "components/Navbar";
import Menu from "components/Menu";
import { IPageProps } from "helpers/interface";

/*
	Page component
	----------------
	@title: page title
	@image: page representation
	@description: page description
	@children: page content
*/

const Page: React.FC<IPageProps> = ({
	title,
	image,
	description,
	children,
}): JSX.Element => {
	const [menuOpened, setMenuOpened] = useState(false);
	const toggleMenu = () => setMenuOpened(!menuOpened);

	return (
		<React.Fragment>
			<Heading title={title} image={image}>
				{description}
			</Heading>
			<main className="h-100 o-h">
				<Navbar atTrigger={toggleMenu} />
				<Menu opened={menuOpened} atClose={toggleMenu} />
				<div className="page w-100 o-a">{children}</div>
			</main>
		</React.Fragment>
	);
};

export default Page;
