import React from "react";
import { IBadgeProps } from "helpers/interface";

const Badge: React.FC<IBadgeProps> = ({ content }): JSX.Element => (
	<p
		className={
			(content < 100 ? "badge" : "badge badge--full") +
			" w-20px h-20px f-row-center-center o-hidden white br-round pointer-none no-select fs-80"
		}
	>
		{content >= 100 ? "+99" : content}
	</p>
);

export default Badge;
