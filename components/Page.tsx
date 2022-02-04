import React, { useState } from "react";
import Heading from "components/Heading";
import Navbar from "components/Navbar";
import Menu from "components/Menu";
import { IPageProps, IUser } from "helpers/interface";
import { AuthContext } from "context/";
import { useUser } from "hooks/";

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
	const user: IUser | null = useUser();
	const [menuOpened, setMenuOpened] = useState<boolean>(false);
	const toggleMenu = (): void => setMenuOpened(!menuOpened);

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
