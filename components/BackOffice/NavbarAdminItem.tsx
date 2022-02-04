import React from "react";
import { INavbarAdminItemProps } from "helpers/interface";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

const NavbarAdminItem: React.FC<INavbarAdminItemProps> = ({
	id,
	section,
	active,
	atClick
}): JSX.Element => (
	<li
		className={(active ? 'navbar-admin-item navbar-admin-item--active' : 'navbar-admin-item') + " pd-10 p br-5 white tr-200 f-r-be-ce"}
		onClick={() => typeof atClick === "function" ? atClick(id) : null}
	>
		<div>
			<Icon icon={section.icon} /> {section.content}
		</div>
		<div className="dot w-15px h-15px br bg-white f-r-ce-ce">
			<div className="w-5px h-5px br bg-theme tr-300">
			</div>
		</div>
	</li>
);

export default NavbarAdminItem