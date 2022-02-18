import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

/*
	Footer title component
*/

const FooterTitle = ({
	icon = ["fas", "heart"],
	title = "Footer title"
}) => (
	<div className="pd-t-20 pd-b-20">
		<h2 className="fs-170 pd-b-20">
			<Icon icon={ icon } /> { title }
		</h2>
		<div className="w-130px h-5px br-5 bg-t"></div>
	</div>
);

export default FooterTitle;