import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

/*
	Navigation bar
*/

const Navbar = ({
	atClick = () => console.log("Trigger clicked"),
}: {
	atClick?: () => void;
}): JSX.Element => (
	<nav className="navbar bg-t w-100">
		<div className="container h-100">
			<div className="w-100 h-100 f-r-be-ce">
				<div className="navbar__title f-r-st-ce">
					<img className="h-50px mg-r-10" src="/assets/singer.png" alt="Logo Singer" />
					<img className="h-50px" src="/assets/singer-text.png" alt="Logo Singer Texte" />
				</div>
				<div
					className="navbar__trigger w-50px h-50px white br-r f-c-ce-ce fs-150 p tr-200"
					title="Ouvrir le menu."
					onClick={ () => atClick() }
				>
					<Icon icon={ ["fas", "bars"] } />
				</div>
			</div>
		</div>
	</nav>
);

export default Navbar;