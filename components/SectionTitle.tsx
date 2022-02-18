import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

/*
	Title component for each section
*/

const SectionTitle = ({
	title = "Title",
	icon = ["fas", "heart"]
}): JSX.Element => (
	<div className="section-title f-r-st-ce pd-t-50 pd-b-20">
		<div className="section-title__line br-5 w-5px h-40px bg-t mg-r-20"></div>
		<h2 className="fs-240">
			<Icon icon={ icon } /> { title }
		</h2>
	</div>
);

export default SectionTitle;