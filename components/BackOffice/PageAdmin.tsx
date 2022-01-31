import React, { useState } from "react";
import { IPageAdminProps } from "helpers/interface";

const PageAdmin: React.FC<IPageAdminProps> = ({
	className,
	children
}): JSX.Element => (
	<div className={"page-admin h-100 o-a " + (className ? className : '')}>
		{children}
	</div>
);

export default PageAdmin;