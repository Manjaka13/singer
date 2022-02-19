import React, { Fragment, useState } from "react";
import Navbar from "components/Navigation/Navbar";
import Menu from "components/Navigation/Menu";

/*
	Navbar and menu wrapper
*/

const Navigation = ({
	notHome = false
}: {
	notHome?: boolean;
}): JSX.Element => {
	const [opened, setOpened] = useState<boolean>(false);

	const toggle = (): void => setOpened(prevState => !prevState);
	const close = (): void => setOpened(false);

	return (
		<Fragment>
			<Navbar atClick={ () => toggle() } />
			<Menu opened={ opened } close={ () => close() } notHome={ notHome } />
		</Fragment>
	);
}

export default Navigation;