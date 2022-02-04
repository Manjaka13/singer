import React from "react";
import { ILoadingProps } from "helpers/interface";

/*
	Loading spinner
*/

const Loading: React.FC<ILoadingProps> = ({className}): JSX.Element => (
	<div className={`loading ${className}`}>Loading...</div>
);

export default Loading;
