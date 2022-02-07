import React, { useState, useEffect } from "react";
import Heading from "components/Heading";
import Navbar from "components/Navbar";
import Menu from "components/Menu";
import { IPageProps } from "helpers/interface";
import { ENDPOINT } from "helpers/const";

/*
	Page component
	----------------
	@title: page title
	@image: page representation
	@description: page description
	@children: page content
	@admin: if admin page
*/

const Page: React.FC<IPageProps> = ({
	title,
	image,
	description,
	children,
	admin
}): JSX.Element => {
	const [menuOpened, setMenuOpened] = useState<boolean>(false);
	const toggleMenu = (): void => setMenuOpened(!menuOpened);

	useEffect(() => console.log("Current endpoint: " + ENDPOINT), []);

	return (
		<React.Fragment>
			<Heading title={title} image={image}>
				{description}
			</Heading>
			<main className="h-100 o-h">
				{!admin && (
					<React.Fragment>
						<Navbar atTrigger={toggleMenu} />
						<Menu opened={menuOpened} atClose={toggleMenu} />
					</React.Fragment>
				)}
				<div className={(admin ? 'page--admin' : 'page' ) + " w-100 o-a"}>{children}</div>
			</main>
		</React.Fragment>
	);
};

export default Page;
