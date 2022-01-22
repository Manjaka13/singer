import React from "react";
import { IBadgeProps } from "helpers/interface";

/*
	For displaying badges with number
*/

const Badge: React.FC<IBadgeProps> = ({ content }): JSX.Element => (
	<p
		className={
			(content < 100 ? "badge" : "badge badge--full") +
			" w-20px h-20px f-r-ce-ce o-h white br p-n n-s fs-80"
		}
	>
		{content >= 100 ? "+99" : content}
	</p>
);

export default Badge;
