import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

/*
	Title component for each section
*/

const defaultIcon: IconProp = ["fas", "heart"];

const SectionTitle = ({
	title = "Title",
	icon = defaultIcon
}: {
	title: string;
	icon: IconProp;
}): JSX.Element => (
	<div className="section-title f-r-st-ce pd-b-20">
		<div className="section-title__line br-5 w-5px h-40px bg-t mg-r-20"></div>
		<h2 className="title fs-240 f-r-st-ce">
			<div className="section-title__icon t mg-r-10">
				<Icon icon={ icon } />
			</div>
			{ title }
		</h2>
	</div>
);

export default SectionTitle;