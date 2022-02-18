import React from "react";
import Waves from "components/Cover/Waves";
import CoverTitle from "components/Cover/CoverTitle";

/*
	Cover wrapper
*/

const Cover = (): JSX.Element => (
	<div className="cover h-100">
		<div className="cover__bg w-100 h-100">
			<div className="cover__overlay w-100 h-100">
				<div className="container f-r-st-ce h-80">
					<CoverTitle />
				</div>
				<div className="w-100 h-20">
					<Waves />
				</div>
			</div>
		</div>
	</div>
);

export default Cover;