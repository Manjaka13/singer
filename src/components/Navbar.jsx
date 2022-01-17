import React from "react";
import { Image } from "./UI";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);

/*
	Navigation component
*/

const Navbar = ({ atTrigger }) => {
	return (
		<nav className="navbar row-10 bg-theme p-top">
			<div className="ctn">
				<div className="row-7 navbar__logo">
					<div className="row-xsm-0 mr-20 h-100">
						<Image src="/singer.png" alt="Singer logo" />
					</div>
					<Image src="/singer-text.png" alt="Singer text logo" />
				</div>
				<div className="row-3 f-end">
					<div
						className="navbar__trigger br-round d-flex f-center"
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
