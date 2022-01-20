import React from "react";
import { INavbarProps } from "helpers/interface";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);

/*
	Navigation component
*/

const Navbar: React.FC<INavbarProps> = ({ atTrigger }): JSX.Element => {
	return (
		<nav className="navbar w-100 f-row-center-center">
			<div className="ctn f-row-between-center">
				<div className="navbar__logo w-70 f-row-start-center">
					<img className="h-100" src="/singer.png" alt="Singer logo" />
					<img className="h-100" src="/singer-text.png" alt="Singer text logo" />
				</div>
				<div className="w-30 f-row-end-center">
					<div
						className="navbar__trigger br-round f-row-center-center fs-160 tr-200 pointer white"
						title="Menu"
						onClick={atTrigger}
					>
						<Icon icon={["fas", "bars"]} />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
