import React from "react";
import { IButtonProps } from "helpers/interface";

const Button: React.FC<IButtonProps> = ({
	title,
	className,
	children,
	atClick,
	color,
	disabled,
	alt,
}): JSX.Element => {
	const defautlCn =
		"pd-10 pd-left-20 pd-right-20 border-none br-5 pointer tr-200";
	const colorCn = color
		? `btn-${alt ? "alt-" : ""}${color}`
		: `btn${alt ? "-alt" : ""}`;
	const disabledCn = disabled ? "btn--disabled" : "";
	const cn = `${
		className ? className : ""
	} ${colorCn} ${disabledCn} ${defautlCn}`;

	return (
		<button className={cn} title={title || ""} onClick={atClick}>
			{children}
		</button>
	);
};

export default Button;
