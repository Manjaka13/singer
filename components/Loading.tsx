import React from "react";
import Spinner from "components/Spinner";

/*
	Page for loading
*/

const Loading = (): JSX.Element => (
	<div className="w-100 h-100 f-c-ce-ce">
		<Spinner />
		<p className="pd-t-20 b tx-c">Chargement...</p>
	</div>
);

export default Loading;