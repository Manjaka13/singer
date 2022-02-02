import React, { useState, useEffect } from "react";
import Heading from "components/Heading";
import Navbar from "components/Navbar";
import Menu from "components/Menu";
import { IPageProps } from "helpers/interface";
import { AuthContext } from "context/";
import Session from "helpers/session";

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
	admin
}): JSX.Element => {
	const [user, setUser] = useState("Loading...");
	const [menuOpened, setMenuOpened] = useState<boolean>(false);
	const toggleMenu = (): void => setMenuOpened(!menuOpened);

	useEffect(() => {
		const sessionUser = Session.get("user");
		if(user)
			setUser(sessionUser);
	}, []);

	return (
		<AuthContext.Provider value={user}>
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
		</AuthContext.Provider>
	);
};

export default Page;
