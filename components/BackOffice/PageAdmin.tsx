import React, { useState } from "react";
import { IPageAdmiProps } from "helpers/interface";

const PageAdmin: React.FC<IPageAdmiProps> = ({
	className,
	children
}): JSX.Element => (
	<div className={"page-admin h-100 o-a " + (className ? className : '')}>
		{children}
	</div>
);

export default PageAdmin;