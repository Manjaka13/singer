import React from "react";
import { INavbarProps } from "helpers/interface";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

/*
	Navigation component
*/

const Navbar: React.FC<INavbarProps> = ({ atTrigger }): JSX.Element => {
	return (
		<nav className="navbar w-100 f-r-ce-ce">
			<div className="ctn f-r-be-ce">
				<div className="navbar__logo w-70 f-r-st-ce">
					<img className="h-100 mg-r-10" src="/singer.png" alt="Singer logo" />
					<img className="h-100" src="/singer-text.png" alt="Singer text logo" />
				</div>
				<div className="w-30 f-r-en-ce">
					<div
						className="navbar__trigger br f-r-ce-ce fs-160 tr-200 p white"
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
