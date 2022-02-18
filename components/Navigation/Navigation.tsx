import React, { Fragment, useState } from "react";
import Navbar from "components/Navigation/Navbar";
import Menu from "components/Navigation/Menu";

/*
	Navbar and menu wrapper
*/

const Navigation = (): JSX.Element => {
	const [opened, setOpened] = useState<boolean>(false);

	const toggle = () => setOpened(prevState => !prevState);
	const close = () => setOpened(false);

	return (
		<Fragment>
			<Navbar atClick={ toggle }/>
			<Menu opened={ opened } close={ close }/>
		</Fragment>
	);
}

export default Navigation;