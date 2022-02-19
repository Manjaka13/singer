import React from "react";

/*
	Loading spinner
*/

const Spinner = ({
	className = ""
} : {
	className?: string;
}): JSX.Element => (
	<div className={`spinner ${className}`}>Loading...</div>
);

export default Spinner;
